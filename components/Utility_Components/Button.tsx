import React from "react";
import styles from "../../styles/Button.module.css";


type ButtonProps = {
  id?: string | undefined;
  class: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClickHandler: () => void;
  innerText: string;
  ariaControls?: string | undefined;
  ariaExpanded?: boolean | undefined;
  ariaLabel?: string | undefined;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      id={props.id}
      className={styles[props.class]}
      onClick={() => props.onClickHandler()}
      type={props.type}
      aria-controls={props.ariaControls}
      aria-expanded={props.ariaExpanded}
      aria-label={props.ariaLabel}>
      {props.innerText}
    </button>
  );
};

export default Button;
