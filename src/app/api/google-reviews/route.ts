import { getGoogleReviews } from "@/lib/google-reviews";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = await getGoogleReviews();
  return NextResponse.json(data);
}
