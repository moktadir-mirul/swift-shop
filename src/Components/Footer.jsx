"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { CiYoutube } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { useSession } from "next-auth/react";

const Footer = () => {
  const { data: session } = useSession();
  return (
    <div className="w-full bg-indigo-600 text-gray-100 pt-10 px-10 pb-2">
      <div className="w-11/12 mx-auto flex gap-5 lg:gap-0 flex-col lg:flex-row justify-between items-center lg:items-start pb-5">
        <div className="flex-1 flex flex-col justify-center items-center gap-2">
          <div>
            <img className="h-16 w-16" src="/images/logo.png" alt="" />
          </div>
          <h1 className="bebas text-3xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-br from-green-100 to-orange-100 text-center">
            Swift Shop
          </h1>
          <p className="text-center text-sm">
            Discover Swift Shop, where style meets innovation. From premium men’s and women’s clothing to the latest e-gadgets, we bring quality and trends to your fingertips.
          </p>
        </div>
        <div className="flex-1 list-none flex flex-col items-center justify-center gap-5 font-bold">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/allProducts"}>All Products</Link>
          </li>
          {
            session && <li>
            <Link href={"/addProducts"}>Add Product</Link>
          </li>
          }
            

        </div>
        <div className="flex-1 text-center space-y-2">
          <h1 className="py-1 font-bold text-xl">Contact Us</h1>
          <h1 className="flex flex-col md:flex-row gap-2 items-center justify-center">
            <MdEmail size={30} color="white"></MdEmail>{" "}
            info@swiftshop.com
          </h1>
          <h1 className="flex flex-col md:flex-row gap-2 items-center justify-center">
            <FaPhoneAlt size={25} color="white" /> +88-01711-140802
          </h1>
          <h1 className="flex flex-col md:flex-row gap-2 items-center justify-center text-center">
            <IoLocation size={30} color="white" />
            Uttara, Dhaka, Bangladesh
          </h1>
        </div>
      </div>
      <div>
        <hr className="text-gray-100" />
        <div className="py-5">
          <h1 className="text-center font-bold">
            Connect With Us
          </h1>
          <div className="flex justify-center items-center  gap-3 py-2">
            <Link href={"https://www.facebook.com/mirulkhan"} target="_blank">
              <FaFacebook size={25} color= "white" />
            </Link>
            <Link href={"https://github.com/moktadir-mirul"} target="_blank">
              <FaGithub size={25} color="white" />
            </Link>
            <Link href={"https://www.linkedin.com/in/mirulmoktadirkhan/"} target="_blank">
              <FaLinkedin size={25} color="white"  />
            </Link>
            <Link
              href={"https://www.youtube.com/@mirulmoktadirkhan2127"}
              target="_blank"
            >
              <CiYoutube size={30} color="white" />
              </Link>
          </div>
          <h1 className="text-center text-sm">
            © 2025 Swift Shop. All rights reserved.{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
