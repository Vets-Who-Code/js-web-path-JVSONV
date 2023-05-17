"use client";
import { useContext } from "react";
import { ModalContext } from "../../store/modalCtxProvider";

const mobileContactButton = () => {
  const modalCtx = useContext(ModalContext);

  return (
    <button
      id="contact-mobile"
      className="button button--mobile button--cta"
      type="button"
      aria-controls="modal"
      onClick={modalCtx.showModalHandler}>
      <img
        className="contact--mobile"
        src="./assets/icons/contact.webp"
        alt="Email me"
      />
      <span className="sr-only">Contact me</span>
    </button>
  );
};

export default mobileContactButton;
