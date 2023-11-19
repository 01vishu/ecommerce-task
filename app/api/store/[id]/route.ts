import prismadb from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const res = await prismadb.product.findUnique({
      where: {
        id: params.id,
      },
    });
    if (!res?.id) {
      return new NextResponse("No Product found", { status: 404 });
    }

    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
