import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (percent > 99) return;
      setPercent(percent + 1);
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [percent]);

  return (
    <>
      <div className="center_div">
        <span className="span_child" style={{ width: `${percent}%` }} />
        <p
          style={{
            zIndex: 2,
            position: "absolute",
            color: "white",
            left: `${percent/2}%`,
          }}
        >
          {percent}%
        </p>
      </div>
    </>
  );
}

export default App;
