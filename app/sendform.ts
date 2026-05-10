"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import lineMes from "./lineMes";

export async function senddoc(formData: FormData) {
  const type = formData.get("type");
  const student = formData.get("student");
  const teacher = formData.get("teacher");
  const date = formData.get("date");
  const starttime = formData.get("start-time");
  const endtime = formData.get("end-time");
  const purpose = formData.get("purpose");
  const parent = formData.get("parent");


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

  await lineMes(`มีคำขอใหม่\n`+`ขออณุญาติ ${type}\n`+`นักเรียน: ${student}\n`+`วันที่: ${date}`)

  redirect("/dashboard/status");
    
}
