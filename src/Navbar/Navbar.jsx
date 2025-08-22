"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const links = (
    <>
      <Link href={"/"}>Home</Link>
      <Link href={"/allProducts"}>All Products</Link>
      {session && <Link href="/addProducts">Add Products</Link>}
    </>
  );
  return (
    <div className="w-full bg-indigo-600 shadow-sm">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
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
            <img
              src="/images/logo.png"
              className="w-10 h-10 md:w-12 md:h-12"
              alt="Swift SHop Logo"
            />
            <h1 className="font-bold text-lg md:text-2xl bg-clip-text text-transparent bg-gradient-to-br from-green-200 to-orange-100">
              Swift Shop
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 text-white font-bold">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {session ? (
            <div className="flex flex-col md:flex-row items-center gap-3">
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt="User"
                  className="w-8 h-8 rounded-full border border-white"
                />
              )}
              <span className="text-white">{session.user?.name}</span>
              <button
                onClick={() => signOut()}
                className="px-5 py-1 font-bold text-xl bg-white hover:bg-indigo-900 duration-200 hover:text-gray-50 rounded-sm cursor-pointer"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link href={"/login"}>
              <button className="px-5 py-1 font-bold text-xl bg-white hover:bg-indigo-900 duration-200 hover:text-gray-50 rounded-sm cursor-pointer">
                Log In
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
