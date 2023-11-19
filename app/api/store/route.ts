import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const res = await db.product.findMany();
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return new NextResponse("Somthing went wrong!", { status: 500 });
  }
}
