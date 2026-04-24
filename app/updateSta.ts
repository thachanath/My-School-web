"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function updateSta(id: string, status: string) {
  const cookiesStore = await cookies();
  const supabase = await createClient();
  const role = cookiesStore.get("userRole")?.value

  if (role == "teacher"){
  const { data, error } = await supabase
    .from("doccument")
    .update({ status: status })
    .eq("id", id);
  if (error) {
    console.log(error);
  } else {
    console.log("succes")
    revalidatePath("/status")
  }
}
}
