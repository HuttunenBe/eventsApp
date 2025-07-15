import { useState, useEffect } from "react";


const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  function getTimeLeft(date) {
    const difference = new Date(date) - new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    if (!timeLeft) return;

    const timer = setInterval(() => {
      const updatedTimeLeft = getTimeLeft(targetDate);
      setTimeLeft(updatedTimeLeft);
      if (!updatedTimeLeft) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, timeLeft]);

  if (!timeLeft) return <span>Event Started or Passed</span>;

  return (
    <span>
      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </span>
  );
};

export default Countdown;
