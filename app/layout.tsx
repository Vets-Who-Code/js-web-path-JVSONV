import { Archivo } from "next/font/google";
import "./index.css";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  description: "Jason Vallery's Portfolio",
  title: "Jason Vallery's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`${archivo.className} body`}>{children}</body>
    </html>
  );
}
