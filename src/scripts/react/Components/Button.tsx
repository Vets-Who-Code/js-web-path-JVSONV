import React from "react";
import * as classes from "./CSS/Button.module.css";

type ButtonProps = {
  innerText: string;
  onClickHandler: () => void;
  class: string;
};

const Button = (props: ButtonProps) => {
  return (
    <button className={classes[props.class]} onClick={() => props.onClickHandler()}>{props.innerText}</button>
  );
};

export default Button;
