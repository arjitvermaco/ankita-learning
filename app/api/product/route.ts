import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    // return NextResponse.json({ message: 'Fetching All products!!!' })
    //get request body
    const body = await request.json();
    console.log(body);
    //create product in db
    const product = await prisma.product.create({
        data: body
    });
    return NextResponse.json(product);
}