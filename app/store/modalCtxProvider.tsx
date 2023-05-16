"use client"
import { createContext, useContext, useState } from "react";


type ModalCtxObj = {
  modalState: boolean;
  showModalHandler: () => void;
};

export const ModalContext = createContext<ModalCtxObj>({
  modalState: false,
  showModalHandler: () => {},
});


type Props = {
  children: React.ReactNode;
}

const ModalCtxProvider = (props: Props) => {

  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(prev => !prev);
  }

  const modalCtx: ModalCtxObj = {
    modalState: showModal,
    showModalHandler: showModalHandler,
  }

  return <ModalContext.Provider value={modalCtx}>{props.children}</ModalContext.Provider>
}

export default ModalCtxProvider;