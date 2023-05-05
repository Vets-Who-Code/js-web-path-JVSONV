import React, { useState } from "react";
import Button from "./Components/Button";
import classes from "./App.module.css";

const App = () => {
  const [currentCount, setCurrentCount] = useState(0);
  const divBackground = document.getElementById("react-app");

  const addButtonHandler = () => {
    setCurrentCount((prevCount) => prevCount+=1);
    console.log(currentCount)
  };

  const subtractButtonHandler = () => {
    setCurrentCount((prevCount) => (prevCount - 1 <= 0 ? 0 : prevCount-= 1));
  };

  const resetButtonHandler = () => {
    setCurrentCount(0);
  };

  const backgroundColorHandler = () => {
    divBackground?.classList.toggle("skittles");
  };

  return (
    <div className={classes.app}>
      <Button
        innerText="Tast the rainbow"
        onClickHandler={backgroundColorHandler}
        class="rainbow"
      />
      <p>{currentCount}</p>
      <div className={classes["button-container"]}>
        <Button
          innerText="Add"
          onClickHandler={addButtonHandler}
          class="add"
        />
        <Button
          innerText="Subtract"
          onClickHandler={subtractButtonHandler}
          class="subtract"
        />
        <Button
          innerText="Reset"
          onClickHandler={resetButtonHandler}
          class="reset"
        />
      </div>
    </div>
  );
};

export default App;
