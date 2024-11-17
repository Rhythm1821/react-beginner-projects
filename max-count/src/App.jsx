import { useState } from "react";
import "./App.css";

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [sec, setSec] = useState(5);
  const [timerId, setTimerId] = useState(null);

  const startTimer = () => {
    if (timerId) {
      return;
    }
    const id = setInterval(() => {
      setTimerId(true);
      setSec((prev) => {
        if (prev === 0) {
          clearInterval(id);
          setTimerId(null);
          return prev;
        }
        return prev - 1;
      });
    }, 1000);

    setTimerId(id);
  };

  const handleClick = () => {
    if (timerId) {
      setClicks((prev) => prev + 1);
    }
  };

  return (
    <div className="App">
      <h1>Total Clicks</h1>
      <h2>{clicks}</h2>
      <button onClick={handleClick}>Click</button>

      <h1>Timer</h1>
      <h2>{sec}</h2>
      <button onClick={startTimer}>Start</button>
    </div>
  );
}
