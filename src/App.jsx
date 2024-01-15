import React, { useState, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const intervalIdRef = useRef(null);

  const incrementAndLog = () => {
    setCount((prevCount) => {
      const updatedCount = prevCount + 1;
      console.log('first count', updatedCount);
      return updatedCount;
    });
  };
  const startInterval = () => {
    intervalIdRef.current = setInterval(() => {
      console.log("second count",secondCount);
      setSecondCount(secondCount + 1);
      incrementAndLog();
    }, 2000);
  };

  const stopInterval = () => {
    clearInterval(intervalIdRef.current); 
  };

  return (
    <div>
      <p>Hit Start Increment and go to console!</p>
      <button onClick={startInterval}>Start Increment</button>
      <button onClick={stopInterval}>Stop Increment</button>
    </div>
  );
}

export default App;

