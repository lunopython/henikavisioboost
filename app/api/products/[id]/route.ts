import { NextResponse } from 'next/server';
import mockProducts from '../route';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const product = mockProducts.find(p => p.id === params.id);

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(product, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=3600'
      }
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}