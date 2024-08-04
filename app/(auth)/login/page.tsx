import React from "react";
import LoginForm from "../components/login-form";

const Page = () => {
  return (
    <div className="mx-auto w-full flex flex-col justify-center space-y-6 py-40 sm:w-[350px]">
      <div className="flex flex-col space-y-8 text-center">
        <h1 className="font-bold text-2xl text-white">Welcome Back!</h1>
        <p className="text-sm text-gray-400">
          Enter your email to sign in/create your account. No password is
          required
        </p>
      </div>
      <LoginForm />
    </div>
  );
};

export default Page;
