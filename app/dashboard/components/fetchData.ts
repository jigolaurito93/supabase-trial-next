'use server';

import { createClient } from "@/lib/supabase/server";

export default async function fetchDataa() {
  const client = createClient();
  const { data, error } = await client.from("login").select("*");
  return { data, error };
}
