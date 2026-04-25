"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export async function signUp(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const cookieStore = await cookies();
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .insert([{ username: username, password: password,role:"student" }])
    .select();
    if(error){
        console.log(error)
    }
    redirect("/");
  
}
