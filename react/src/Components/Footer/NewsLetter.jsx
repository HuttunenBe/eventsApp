import { useState } from "react";
import { DotLoader } from "react-spinners";
import Loading from "../Loading/Loading";

function Newsletter() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      //check if empty or doesn't match an email address
      setIsEmailValid(false);
    } else {
      setLoading(true);
      setIsEmailValid(true);

      setTimeout(() => {
        setLoading(false);
        alert("Thank you for subscribing with us!");
        setEmail("");
      }, 1200);
    }
  }

  return (
    <>
      <h2 id="subscribeHeader">Subscribe to our newsletter!</h2>
      {!isEmailValid ? <p>Please enter a valid email address</p> : null}
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address please"
            value={email}
            onChange={handleInput}
          />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </>
  );
}

export default Newsletter;
