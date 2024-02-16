import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function insertEmail(WaitingUser) {
  try {
    // Insert a new email into the Waitinglist table
    const { data: insertData, error: insertError } = await supabase
      .from("Waitinglist")
      .insert([{ email: WaitingUser }]);

    console.log("Insertion Data:", insertData);
    console.log("Insertion Error:", insertError);

    // Log an indication of success or failure
    if (!insertError) {
      console.log("Email inserted successfully");
    } else {
      console.error(`Error during insertion: ${insertError.message}`);
    }
  } catch (error) {
    console.error("Error during insertion:", error.message);
  }
}

async function showWaitingList() {
  try {
    // Retrieve existing emails from the Waitinglist table
    const { data: Waitinglist, error: selectError } = await supabase
      .from("Waitinglist")
      .select("*");

    console.log("Existing emails:", Waitinglist);

    // Log an indication of success or failure
    if (!selectError) {
      console.log("Retrieved existing emails successfully");
    } else {
      console.error(`Error during retrieval: ${selectError.message}`);
    }
  } catch (error) {
    console.error("Error during retrieval:", error.message);
  }
}

export { insertEmail, showWaitingList };
