import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "../components/navbar"
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NaviXplore",
  description: "Navixplore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
