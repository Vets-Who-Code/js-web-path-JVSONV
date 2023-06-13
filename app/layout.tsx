import { Archivo } from "next/font/google";
import Footer from "./components/Utility_Components/Footer";
import MobileContactButton from "./components/Utility_Components/MobileContact";
import Modal from "./components/Utility_Components/Modal";
import Navigation from "./components/Utility_Components/Navigation";
import ModalCtxProvider from "./store/ModalCtxProvider";
import "../styles/globals.css"

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`${archivo.className} body`}>
        <ModalCtxProvider>
          <Navigation />
          {children}
          <Modal />
          <MobileContactButton />
          <Footer />
        </ModalCtxProvider>
      </body>
    </html>
  );
}
