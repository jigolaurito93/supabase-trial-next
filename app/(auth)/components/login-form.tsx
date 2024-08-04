import SubmitButton from "@/components/submit-button";
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
      <SubmitButton />
    </form>
  );
};

export default LoginForm;
