import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

function checkAuth(req) {
  const auth = req.headers.get("x-admin-password");
  return auth && auth === process.env.ADMIN_PASSWORD;
}

export async function GET(req) {
  if (!checkAuth(req)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  if (!supabaseAdmin) {
    return NextResponse.json({ ok: false, error: "Supabase not configured" }, { status: 500 });
  }
  const { data, error } = await supabaseAdmin
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, messages: data });
}
