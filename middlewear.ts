import {createMiddlewareClient} from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"

export async function middlewear(){
    const res=NextResponse.next();
    const supabase = createMiddlewareClient({req,res})
}