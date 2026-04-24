import { createClient } from "@/utils/supabase/server";

export default async function fetchdata() {

  const supabase = await createClient();

  let { data: doccuments, error } = await supabase
    .from("doccument")
    .select("*");

  return doccuments??[];
}