"use server"


import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";


export async function login(formData: FormData){
    const username = formData.get('username')
    const password = formData.get('password')

    const cookieStore = await cookies();
    const supabase = await createClient()

    const { data: user, error } = await supabase
        .from('users')
        .select("*")
        .eq('username', username)
        .single()

    if (error || !user) {
        console.log("ไม่พบชื่อผู้ใช้นี้",username,error);
        return;
    }
    if (user.password === password){
        cookieStore.set("userRole",user.role,{
            path: "/",
            httpOnly: true,
            secure: true,
            maxAge: 60*60*24*30,
        })
        redirect('/dashboard')
    }
    else{
        console.log('incorect password',error)
    }
}