import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function InsertEmail(mail) {
  try {
    const { data, error } = await supabase
      .from("Waitinglist")
      .insert([{ email: mail }])
      .select();

    console.log("Data:", data);
    console.log("Error:", error);
  } catch (error) {
    console.error("Error during insertion:", error.message);
  }
}

export default InsertEmail;
