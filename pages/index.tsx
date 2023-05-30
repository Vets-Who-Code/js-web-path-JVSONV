import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

import { Archivo } from "next/font/google";
import Main from "../components/MainComponents/Main";
import Footer from "../components/Utility_Components/Footer";
import MobileContactButton from "../components/Utility_Components/MobileContact";
import Modal from "../components/Utility_Components/Modal";
import Navigation from "../components/Utility_Components/Navigation";
import ModalCtxProvider from "./store/modalCtxProvider";

const archivo = Archivo({ subsets: ["latin"] });

export default function Home() {
  return <Main />;
}

// import { Metadata } from "next";
// import Main from "./components/MainComponents/Main";

// export const metadata: Metadata = {
//   description: "Jason Vallery's Portfolio",
//   title: "Jason Vallery's Portfolio",
// };

// export default function Home() {
//   return <Main />;
// }

// import { Archivo } from "next/font/google";
// import Footer from "./components/Utility_Components/Footer";
// import Modal from "./components/Utility_Components/Modal";
// import Navigation from "./components/Utility_Components/Navigation";
// import MobileContactButton from "./components/Utility_Components/MobileContact";
// import ModalCtxProvider from "./store/modalCtxProvider";

// const archivo = Archivo({
//   subsets: ["latin"],
//   display: "swap",
// });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }): JSX.Element {
//   return (
//     <html lang="en">
//       <body className={`${archivo.className} body`}>
//         <ModalCtxProvider>
//           <Navigation />
//           {children}
//           <Modal />
//           <MobileContactButton />
//           <Footer />
//         </ModalCtxProvider>
//       </body>
//     </html>
//   );
// }
