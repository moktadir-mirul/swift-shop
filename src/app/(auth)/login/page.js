"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const handleGoogleLogin = () => {
    signIn("google");
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 py-12">
      <div className="bg-indigo-50 space-y-8 shadow-lg rounded-lg p-8 max-w-md w-11/12">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">Login in to your Account</h1>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          <FcGoogle className="mr-2 text-2xl bg-white rounded-full p-1" />
          Sign in with Google
        </button>
        <h1 className="text-center">By singing in, you are agreeing to our tersm & conditions.</h1>
      </div>
    </div>
  );
}
