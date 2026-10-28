import { useState } from 'react';

export default function NewsletterForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);

  const [formValues, setFormValues] = useState({
    email: '',
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setError({});
    setConsentError(false);

    const cleanedNewsletterValues = {
      email: (formValues.email || '').trim().toLowerCase(),
    };

    const validationError = {};

    if (!cleanedNewsletterValues.email) {
      validationError.email = 'Email is required.';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        cleanedNewsletterValues.email
      )
    ) {
      validationError.email = 'Please enter a valid email address.';
    }

    if (Object.keys(validationError).length > 0) {
      setError(validationError);
      return;
    }

    if (!consent) {
      setConsentError(true);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        'http://127.0.0.1:8000/api/newsletter',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            email: cleanedNewsletterValues.email,
            consent: consent,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(
          data.message ||
            'Error. Please try again later.'
        );
        return;
      }

      alert(
        data.message ||
          'Thank you for subscribing to the newsletter.'
      );

      setFormValues({
        email: '',
      });

      setConsent(false);
    } catch (error) {
      console.error('Newsletter request failed:', error);

      alert(
        'Error. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="newsletterEmail">Email</label>

        <input
          id="newsletterEmail"
          type="email"
          value={formValues.email}
          onChange={(e) => {
            setFormValues({
              ...formValues,
              email: e.target.value,
            });

            setError((previousError) => ({
              ...previousError,
              email: '',
            }));
          }}
          required
        />

        {error.email && <p>{error.email}</p>}
      </div>

      <div>
   <label className="newsletterCheckbox">
  <input
    id="newsletterCheckbox"
    type="checkbox"
    checked={consent}
    onChange={(e) => {
      setConsent(e.target.checked);
      setConsentError(false);
    }}
  />
  I agree to receive the newsletter by email.
</label>

        {consentError && (
          <p>Please tick the checkbox before subscribing.</p>
        )}
      </div>

      <button type="submit" disabled={loading}>
        {loading ? 'Subscribing' : 'Subscribe'}
      </button>
    </form>
  );
}