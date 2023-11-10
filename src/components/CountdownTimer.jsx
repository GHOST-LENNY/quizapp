import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
function CountdownTimer({ targetTime, onTimeExpired }) {
  const [currentTime, setCurrentTime] = useState(targetTime);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      if (currentTime <= 0) {
        onTimeExpired();
      }
    };
  }, [onTimeExpired, currentTime]);

  const seconds = currentTime % 60;
  const minutes = Math.floor((currentTime / 60) % 60);

  return (
    <div className="font-bold flex justify-end px-4 pt-2">
      {currentTime <= 0 ? (
        // eslint-disable-next-line react/no-unescaped-entities
        <p>Time's up!</p>
      ) : (
        <>
          <span className="loading loading-spinner loading-xs"></span>

          <p className="countdown font-mono text-lg">
            {minutes < 10 ? "0" : ""}
            {minutes}:{seconds < 10 ? "0" : ""}
            {seconds}
          </p>
        </>
      )}
    </div>
  );
}

export default CountdownTimer;
