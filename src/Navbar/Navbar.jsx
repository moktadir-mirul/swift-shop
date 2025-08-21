import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const links = <>
    <Link href={"/"}>Home</Link>
    <Link href={"/AllProducts"}>All Products</Link>
    <Link href={"/AddProduct"}>Add Product</Link>
    </>
  return (
    <div className="w-full bg-indigo-600 shadow-sm">
        <div className="navbar w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-1">
            <img src="/images/logo.png" className="w-12 h-12" alt="Swift SHop Logo" />
            <h1 className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-br from-green-200 to-orange-100">Swift Shop</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 text-white font-bold">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="px-8 py-1 font-bold text-xl bg-white hover:bg-indigo-400 duration-300 hover:text-gray-300 rounded-md cursor-pointer">Log In</button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
