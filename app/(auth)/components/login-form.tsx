'use client';

import SubmitButton from "@/components/submit-button";
import { login } from "@/lib/actions";
import React from "react";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const initialState = {
    message: "",
    error: false,
  };

  const [state, formAction] = useFormState(login, initialState);

  return (
    <form action={formAction} className="text-white space-y-5">
      <input
        type="email"
        className="text-black w-full py-1 px-2 rounded-md"
        placeholder="email@email.com"
        name="emailAddress"
      />
      <SubmitButton />
      <p
        className={`${
          state?.error ? "text-red-500" : "text-green-500"
        } text-sm text-center`}
      >
        {state?.message}
      </p>
    </form>
  );
};

export default LoginForm;