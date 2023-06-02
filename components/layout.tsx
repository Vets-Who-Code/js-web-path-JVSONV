import { Archivo } from "next/font/google";
import React from "react";
import ModalCtxProvider from "../pages/store/modalCtxProvider";
import Footer from "./Utility_Components/Footer";
import MobileContactButton from "./Utility_Components/MobileContact";
import Modal from "./Utility_Components/Modal";
import Navigation from "./Utility_Components/Navigation";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
});

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <ModalCtxProvider>
        <Navigation />
        {children}
        <Modal />
        <MobileContactButton />
        <Footer />
      </ModalCtxProvider>
    </>
  );
}
