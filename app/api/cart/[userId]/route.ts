import prisma from "@/utils/db";
import { NextResponse } from "next/server";

//Create a cart for a user
export async function POST(request: Request, { params }: { params: { userId: string } }) {
    const { userId } = await params; // Await params before using
    console.log(userId);
    
    // Check if the request body is valid
    const body = await request.json();
    if (!body || !Array.isArray(body)) {
        return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    // Check if a cart already exists for the user
    const existingCart = await prisma.cart.findUnique({
        where: { userId: parseInt(userId) }
    });

    let cart;
    if (existingCart) {
        cart = existingCart; // Use existing cart
    } else {
        // Create a new cart if it doesn't exist
        cart = await prisma.cart.create({
            data: {
                userId: parseInt(userId)
            }
        });
    }

    // Validate product IDs
    const productIds = body.map((item: { productId: number }) => item.productId);
    const existingProducts = await prisma.product.findMany({
        where: {
            product_id: { in: productIds }
        }
    });

    const existingProductIds = existingProducts.map(product => product.product_id);
    const invalidProductIds = productIds.filter(id => !existingProductIds.includes(id));

    if (invalidProductIds.length > 0) {
        return NextResponse.json({ error: `Invalid product IDs: ${invalidProductIds.join(", ")}` }, { status: 400 });
    }

    // Add the items to the cart
    const cartItems = await prisma.cartItem.createMany({
        data: body.map((item: { productId: number; quantity: number }) => ({
            cartId: cart.cart_id,
            productId: item.productId,
            quantity: item.quantity
        }))
    });

    // Return the cart details including the cart items with product details
    return NextResponse.json({ cart, cartItems });
}