import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const divs = new Array(9).fill(0);
  const [boxFilled, setBoxFilled] = useState(0);
  const [boxes, setBoxes] = useState(new Array(9).fill({index: 0, color: false}));
  const [boxesToClear, setBoxesToClear] = useState([]); // contains the sequence in which boxes need to be cleared.


  useEffect(() => {
    if(boxFilled === 8) {
      let index = -1;
      const interval = setInterval(() => {
        setBoxes((boxes) => {
          let updatedArray = [...boxes];
          let indexToClear = boxesToClear[index];
          updatedArray[indexToClear] = {...updatedArray[indexToClear], color: false}
          // console.log(boxes);
          return updatedArray;
        })
        index++;

        if(index === 8) {
          clearInterval(interval);
          setBoxFilled(0);
          setBoxesToClear([])
        }
      }, 300)
    }
  }, [boxFilled])

  return (
    <div className="parent">
      {divs.map((_, ind) => {
        return (
          <div
            onClick={() => {
              const updatedArray = [...boxes]
              updatedArray[ind] = {index: ind, color: true}
              setBoxes(updatedArray);
              setBoxFilled(boxFilled+1);
              setBoxesToClear(boxes => [...boxes, ind]);
            }}
            key={ind}
            className="grandchild"
            style={{
              backgroundColor: boxes[ind].color === true ? "green" : "white",
              visibility: ind === 4 ? "hidden" : "visible",
            }}
          >
            <p>{ind}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;