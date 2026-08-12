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
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, projects: data });
}

export async function POST(req) {
  if (!checkAuth(req)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  if (!supabaseAdmin) {
    return NextResponse.json({ ok: false, error: "Supabase not configured" }, { status: 500 });
  }
  const body = await req.json();
  const { title, description, features, tech, image, url, sort_order } = body;

  const { data, error } = await supabaseAdmin
    .from("projects")
    .insert([{ title, description, features, tech, image, url, sort_order: sort_order || 0 }])
    .select();

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, project: data[0] });
}

export async function PUT(req) {
  if (!checkAuth(req)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  if (!supabaseAdmin) {
    return NextResponse.json({ ok: false, error: "Supabase not configured" }, { status: 500 });
  }
  const body = await req.json();
  const { id, ...fields } = body;
  if (!id) return NextResponse.json({ ok: false, error: "id required" }, { status: 400 });

  const { data, error } = await supabaseAdmin
    .from("projects")
    .update(fields)
    .eq("id", id)
    .select();

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, project: data[0] });
}

export async function DELETE(req) {
  if (!checkAuth(req)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  if (!supabaseAdmin) {
    return NextResponse.json({ ok: false, error: "Supabase not configured" }, { status: 500 });
  }
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ ok: false, error: "id required" }, { status: 400 });

  const { error } = await supabaseAdmin.from("projects").delete().eq("id", id);
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
