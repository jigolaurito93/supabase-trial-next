// import { createClient } from '@supabase/supabase-js';
// import dotenv from 'dotenv';

// dotenv.config({path:'.env.local'});

// const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL,
//     process.env.SUPABASE_SERVICE_ROLE
// )


// async function seed() {

//     let transactions = [];

//     let id, created_at, username, password;
    
//     username = "demonslayer";
//     password = "asd123";
    
//     transactions.push({
//       username,
//       password,
//     });
    
//     const { error } = await supabase.from("login").insert(transactions);
    
//     if (error) {
//       console.log("error", error);
//     } else {
//       console.log("success");
//     }

// }


// seed().catch(console.error)