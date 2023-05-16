import { Archivo } from "next/font/google";
import Footer from "./components/Utility_Components/footer";
import Modal from "./components/Utility_Components/modal";
import Navigation from "./components/Utility_Components/navigation";
import "./global.css";
import ModalCtxProvider from "./store/modalCtxProvider";

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
          <Footer />
        </ModalCtxProvider>
      </body>
    </html>
  );
}
