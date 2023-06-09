"use client";
import Image from "next/image";
import { useContext } from "react";
import contact from "../../../public/assets/icons/contact.webp";
import { ModalContext } from "../../store/ModalCtxProvider";

const MobileContactButton = () => {
  const modalCtx = useContext(ModalContext);

  return (
    <button
      id="contact-mobile"
      className="button button--mobile button--cta"
      type="button"
      aria-controls="modal"
      onClick={modalCtx.showModalHandler}>
      <Image
        className="contact--mobile"
        src={contact}
        alt="Email me"
      />
      <span className="sr-only">Contact me</span>
    </button>
  );
};

export default MobileContactButton;
