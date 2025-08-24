import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Navbar/Navbar";
import Footer from "@/Components/Footer";
import AuthProvider from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Swift Shop",
  description: "An ecommerce site for buying products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col justify-between`}
      >
        <div>
          <AuthProvider><Navbar></Navbar></AuthProvider>
          <AuthProvider>{children}</AuthProvider>
          <ToastContainer></ToastContainer>
        </div>
        <AuthProvider><Footer></Footer></AuthProvider>
      </body>
    </html>
  );
}
