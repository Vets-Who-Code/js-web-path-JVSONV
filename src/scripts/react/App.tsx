import React, { useState } from "react";
import Button from "../../../app/components/Utility_components/button";
import classes from "./App.module.css";

const App = () => {
  const [currentCount, setCurrentCount] = useState(0);
  const [animateBg, setAnimateBg] = useState(false);

  function addButtonHandler() {
    setCurrentCount((prevCount) => prevCount += 1);
  }

  const subtractButtonHandler = () => {
    setCurrentCount((prevCount) => (prevCount - 1 <= 0 ? 0 : prevCount-= 1));
  };

  const resetButtonHandler = () => {
    setCurrentCount(0);
  };

  const backgroundColorHandler = () => {
    setAnimateBg(prev => !prev);
  };

  return (
    <div
      className={
        animateBg ? `${classes.app} ${classes.skittles}` : `${classes.app}`
      }>
      <Button
        innerText="Tast the rainbow"
        onClickHandler={backgroundColorHandler}
        class="rainbow"
      />
      <p>Keep Track!</p>
      <p>The current count is:</p>
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
