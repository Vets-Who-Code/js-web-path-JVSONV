"use client";
import Image from "next/image";
import { useContext, useRef } from "react";
import { ModalContext } from "../../store/modalCtxProvider";
import closeIcon from "/public/assets/icons/close.webp";

const Modal = () => {
  const modalCtx = useContext(ModalContext);

  const modalRef = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLImageElement>(null);

  if (modalCtx.modalState) {
    modalRef.current!.showModal();
    modalRef.current!.onanimationend = null;
  }

  const removeModal = (
    e: React.MouseEvent<HTMLDialogElement> | React.MouseEvent<HTMLImageElement>
  ) => {
    e.stopPropagation();
    if (e.target === modalRef.current || e.target === closeButton.current) {
      modalRef.current!.setAttribute("closing", "");
      modalRef.current!.onanimationend = () => {
        modalRef.current!.removeAttribute("closing");
        modalRef.current!.close();
        modalCtx.showModalHandler();
      };
    }
  };

  return (
    <dialog
      className="modal"
      id="modal"
      aria-hidden="true"
      aria-modal="true"
      ref={modalRef}
      onClick={(e) => removeModal(e)}>
      <form
        className="contact"
        action="#"
        method="dialog">
        <button
          className="close__modal-wrapper"
          type="button">
          <Image
            className="modal__close"
            src={closeIcon}
            alt="Close icon"
            aria-controls="modal"
            ref={closeButton}
            onClick={(e) => removeModal(e)}
          />
        </button>
        <div className="input-wrapper">
          <label htmlFor="name">Name:</label>
          <input
            className="contact-name"
            type="text"
            id="name"
            name="vistorN"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email:</label>
          <input
            className="contact-email"
            type="email"
            id="email"
            name="visitorE"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="message">Message: </label>
          <textarea
            name="visitorM"
            id="message"
            cols={30}
            rows={5}></textarea>
        </div>
        <button
          type="submit"
          className="button send">
          Send
        </button>
      </form>
    </dialog>
  );
};

export default Modal;
