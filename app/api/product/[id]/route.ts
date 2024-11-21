import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {

    console.log(params.id);
    const product = await prisma.product.findUnique({
        where: { product_id: parseInt(params.id) }
    });
    return NextResponse.json(product);
    // return NextResponse.json({ message: 'Fetching product with id: ' + params.id });
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const body = await request.json();
    console.log(body);
    const product = await prisma.product.update({
        where: { product_id: parseInt(params.id) },
        data: body
    });
    return NextResponse.json(product);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const product = await prisma.product.delete({
        where: { product_id: parseInt(params.id) }
    });
    return NextResponse.json(product);
}