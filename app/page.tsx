"use client"; // Mark this file as a client component

import { addUser } from "@/lib/actions";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { FormFieldUser, UserSchema } from "./data/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormFieldUser>({
    resolver: zodResolver(UserSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: FormFieldUser) => {
    try {
      console.log(data);
      await addUser(data);
      router.push("/dashboard");
    } catch (error) {
      console.log("Error adding user:", error);
    }
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-4 h-screen"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          {...register("username", { required: true })}
          className="border-2 rounded-md border-black"
        />
        {errors?.username && <span>{errors.username.message}</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="border-2 rounded-md border-black"
        />
        {errors?.email && <span>{errors.email.message}</span>}
      </div>
      <button
        type="submit"
        className={`border-2 rounded-md border-black ${
          isValid ? "bg-white" : "bg-slate-300"
        }`}
      >
        Add User
      </button>
    </form>
  );
}
