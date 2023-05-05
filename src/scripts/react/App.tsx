import React, { useState } from "react";
import Button from "./Components/Button";

const App = () => {
  const [currentCount, setCurrentCount] = useState(0);

  const addButtonHandler = () => {
    setCurrentCount((prevCount) => prevCount++);
  };

  const subtractButtonHandler = () => {
    setCurrentCount((prevCount) => prevCount - 1 === 0 ? 0 : prevCount--);
  };

  const resetButtonHandler = () => {
    setCurrentCount(0);
  };

  const backgroundColorHandler = () => {
    const divBackground = document.getElementById("react-app");
  }

  return (
    <div>
      <Button
        innerText="Add"
        onClickHandler={addButtonHandler}
      />
      <Button
        innerText="Subtract"
        onClickHandler={subtractButtonHandler}
      />
      <Button innerText="Reset" onClickHandler={resetButtonHandler} />
    </div>
  );
};

export default App;
