import { useState, useRef } from "react";

const RefComponent = () => {
  const [stateNumber, setStateNumber] = useState(0);
  const numRef = useRef(0);
  const myBtn = useRef(null);

  function incrementAndDelayLogging() {
    setStateNumber(stateNumber + 1);
    numRef.current++;
    setTimeout(
      () => alert(`state: ${stateNumber} | ref: ${numRef.current}`),
      1000
    );
  }

  const clickIt = () => myBtn.current.click();

  return (
    <div>
      <h1>useRef Example 1</h1>
      <button onClick={incrementAndDelayLogging}>delay logging</button>
      <h4>state: {stateNumber}</h4>
      <h4>ref: {numRef.current}</h4>

      <h1>useRef Example 2</h1>
      <button ref={myBtn}>Click It</button>
    </div>
  );
};

export default RefComponent;
