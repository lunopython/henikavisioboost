import { NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  productId: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message || !body.productId) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save the message to your database
    // 2. Send email notification to the seller
    // 3. Send confirmation email to the buyer

    // Mock implementation
    console.log('New contact form submission:', body);

    return NextResponse.json(
      { message: "Message sent successfully" },
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}