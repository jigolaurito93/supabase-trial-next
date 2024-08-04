import { login } from "@/lib/actions";
import React from "react";

const LoginForm = () => {
  return (
    <form action={login} className="text-white space-y-5">
      <input
        type="email"
        className="text-black w-full py-1 px-2 rounded-md"
        placeholder="email@email.com"
        name="emailAddress"
      />
      <button className="border rounded-md py-1 px-4 mt-8 w-full bg-white text-black">
        Sign in with Email
      </button>
    </form>
  );
};

export default LoginForm;
