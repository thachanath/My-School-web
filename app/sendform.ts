"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export async function senddoc(formData: FormData) {
  const type = formData.get("type");
  const student = formData.get("student");
  const teacher = formData.get("teacher");
  const date = formData.get("date");
  const starttime = formData.get("start-time");
  const endtime = formData.get("end-time");
  const purpose = formData.get("purpose");
  const parent = formData.get("parent");

  console.log(
    type,
    student,
    teacher,
    date,
    starttime,
    endtime,
    purpose,
    parent,
  );

  const cookiesStore = cookies();
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("doccument")
    .insert([{type: type,
    name:student,
    teacher:teacher,
    date:date,
    startTime:starttime,
    endTime:endtime,
    purpose:purpose,
    parent:parent,
    status:"Pending"}])
  if(error){
    console.log(error)
    return;
  }
  else{
    console.log("success")
  }
  redirect("/dashboard/status");
    
}
