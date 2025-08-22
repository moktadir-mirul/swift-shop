import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Products from "@/Components/Products";
import Navbar from "@/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
    <Navbar></Navbar>
    <Hero></Hero>
    <Products></Products>
    <Footer></Footer>
      </main>
    </div>
  );
}
