import { NextResponse } from "next/server"

export async function GET(request: Request) {
    // return NextResponse.json({ message: 'Hello, world!' })
    return NextResponse.json({ message: 'Coming from GET Request!!!' })
}

export async function POST(request: Request) {
    const params = request.nextUrl.searchParams;
    const body = await request.json()
    const headers = request.headers;
    console.log(params)
    console.log(body)
    console.log(headers)
    return NextResponse.json({ message: 'Coming from POST Request!!!' })
}