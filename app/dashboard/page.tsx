import { createClient } from "@/lib/supabase/server";
import React from "react";

const Dashboard = async () => {
  const client = createClient();
  const { data, error } = await client.from("login").select("*");

  return (
    <div>
      {data?.map((user) => {
        return <div>{user.username}</div>;
      })}
    </div>
  );
};

export default Dashboard;
