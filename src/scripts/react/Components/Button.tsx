import React from "react";

type ButtonProps = {
  innerText: string;
  onClickHandler: () => void;
};

const Button = (props: ButtonProps) => {
  return <button onClick={() => props.onClickHandler()}>{props.innerText}</button>;
};

export default Button;
