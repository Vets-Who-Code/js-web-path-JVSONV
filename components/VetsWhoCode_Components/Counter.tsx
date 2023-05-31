"use client";
import React, { useState } from "react";
import classes from "../../pages/CSS/Counter.module.css";
import Button from "../Utility_Components/Button";

const Counter = () => {
  const [currentCount, setCurrentCount] = useState(0);
  const [animateBg, setAnimateBg] = useState(false);

  function addButtonHandler() {
    setCurrentCount((prevCount) => (prevCount += 1));
  }

  const subtractButtonHandler = () => {
    setCurrentCount((prevCount) => (prevCount - 1 <= 0 ? 0 : (prevCount -= 1)));
  };

  const resetButtonHandler = () => {
    setCurrentCount(0);
  };

  const backgroundColorHandler = () => {
    setAnimateBg((prev) => !prev);
  };

  return (
    <div
      className={
        animateBg
          ? `${classes.counter} ${classes.skittles}`
          : `${classes.counter}`
      }>
      <Button
        innerText="Tast the rainbow"
        onClickHandler={backgroundColorHandler}
        class="rainbow"
      />
      <p>Keep Track!</p>
      <p>The current count is:</p>
      <p>{currentCount}</p>
      <div className={classes.button__container}>
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

export default Counter;
