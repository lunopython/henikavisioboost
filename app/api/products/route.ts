import { NextResponse } from 'next/server';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
  specifications: {
    qualityStandards: string[];
    packagingOptions: string[];
    shippingInfo: string[];
  };
}

const mockProducts: Product[] = [
  // Your existing PRODUCTS array converted to this format
  {
    id: "1",
    name: "Premium Arabica Coffee Beans",
    description: "High-quality Arabica coffee beans from Ethiopia...",
    image: "/coffee-beans.jpg",
    category: "coffee-beans",
    price: 12.99,
    specifications: {
      qualityStandards: [
        "USDA Organic certified",
        "Fair Trade certified",
        "ISO 22000 compliant"
      ],
      packagingOptions: [
        "Bulk packaging available",
        "Custom packaging solutions",
        "Eco-friendly materials"
      ],
      shippingInfo: [
        "Worldwide shipping available",
        "Air and sea freight options",
        "Temperature-controlled containers"
      ]
    }
  },
  // Add other products...
];

export async function GET() {
  try {
    return NextResponse.json(mockProducts, {
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
export default mockProducts