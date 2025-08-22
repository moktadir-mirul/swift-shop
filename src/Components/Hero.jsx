import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full">
      <section className="text-gray-800 w-11/12 mx-auto">
        <div className=" flex flex-col justify-center  mx-auto lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center py-5 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl text-indigo-600">
              Swift Shop
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Welcome to Swift Shop – your ultimate destination for trendy men’s wear, stylish women’s outfits, and cutting-edge gadgets. Shop smart, stay ahead, and experience fashion and tech like never before.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded cursor-pointer bg-indigo-600 text-gray-50 hover:bg-indigo-800 duration-200"
              >
                Discover
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center  mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="/images/hero-img.jpg"
              alt=""
              className="rounded-md object-cover w-full h-full "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
