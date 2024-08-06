"use server";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function addUser(formData: {}) {
  const { error } = await createClient().from("login").insert(formData);

  if (error) {
    throw new Error("it aint good");
  }
  revalidatePath("/dashboard");
}

interface PrevStateProp {
  message: string;
  error: boolean;
}

export async function login(prevState: PrevStateProp, formData: FormData) {
  const supabase = createClient();
  const email = formData.get("emailAddress");

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
    },
  });

  if (error) {
    return {
      message: "Authentication error",
      error: true,
    };
  }

  return {
    message: `Check your email at ${email}`,
    error: false,
  };
}
