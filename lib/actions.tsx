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
