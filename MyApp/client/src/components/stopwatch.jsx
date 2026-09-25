import { useEffect, useState } from "react";
import "./Stopwatch.css";

function Stopwatch() {
  const [ms, setMs] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (running) {
      const timer = setInterval(() => {
        setMs((prev) => {
          if (prev === 99) {
            setSec((s) => {
              if (s === 59) {
                setMin((m) => m + 1);
                return 0;
              }
              return s + 1;
            });
            return 0;
          }
          return prev + 1;
        });
      }, 10);

      return () => clearInterval(timer);
    }
  }, [running]);

  const reset = () => {
    setRunning(false);
    setMs(0);
    setSec(0);
    setMin(0);
  };

  return (
    <div className="stopwatch">
      <h1>
        {String(min).padStart(2, "0")} :
        {String(sec).padStart(2, "0")} :
        {String(ms).padStart(2, "0")}
      </h1>

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;