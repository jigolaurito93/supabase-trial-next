"use client";
import { Divide, Loader } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className={`relative rounded-md py-1 px-4 mt-8 w-full bg-white text-black flex items-center justify-center space-x-2 ${
        pending ? "bg-gray-500" : ""
      }`}
    >
      {pending ? (
        <Loader className="absolute top-1 left-12 animate-spin w-6 h-6" />
      ) : (
        ""
      )}
      <span>Sign in with Email</span>
    </button>
  );
};

export default SubmitButton;
