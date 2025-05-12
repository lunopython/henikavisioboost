import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FC } from "react";

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

interface ContactSellerFormProps {
  productId: string; 
}

const ContactSellerForm: FC<ContactSellerFormProps> = ({ productId }) => {
  return (
    <form>
      <h3>Contact Seller</h3>
      <input type="hidden" name="productId" value={productId} />
      <button type="submit">Send Message</button>
    </form>
  );
};

export async function generateStaticParams() {
  try {
    const products = await fetch(`${process.env.API_BASE_URL}/products`).then((res) => res.json());

    return products.map((product: { id: string }) => ({
      id: product.id,
    }));
  } catch (error) {
    console.error("Failed to fetch product data:", error);
    return [];
  }
}

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${process.env.API_BASE_URL}/products/${id}`, {
    next: { revalidate: 3600 }, // Revalidate every hour
  });

  if (!res.ok) notFound();
  return res.json();
}

async function getRelatedProducts(category: string, excludeId: string): Promise<Product[]> {
  const res = await fetch(
    `${process.env.API_BASE_URL}/products?category=${category}&limit=3&exclude=${excludeId}`
  );
  return res.json();
}

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);
  const relatedProducts = await getRelatedProducts(product.category, params.id);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/30"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center text-white">
              <div className="mb-4 text-amber-500 font-medium uppercase tracking-wider">
                {product.category.replace(/-/g, " ")}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-white/90">{product.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">
                Product Specifications
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Quality Standards</h3>
                  <ul className="space-y-3 text-slate-600">
                    {product.specifications.qualityStandards.map((standard) => (
                      <li key={standard} className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-700 rounded-full mr-3"></div>
                        {standard}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Packaging Options</h3>
                  <ul className="space-y-3 text-slate-600">
                    {product.specifications.packagingOptions.map((option) => (
                      <li key={option} className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-700 rounded-full mr-3"></div>
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Shipping Information</h3>
                  <ul className="space-y-3 text-slate-600">
                    {product.specifications.shippingInfo.map((info) => (
                      <li key={info} className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-700 rounded-full mr-3"></div>
                        {info}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">
                Contact Seller
              </h2>
              <ContactSellerForm productId={product.id} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-slate-100">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-playfair font-bold mb-8 text-center">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{relatedProduct.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {relatedProduct.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white"
                    onClick={() =>
                      (window.location.href = `/products/${relatedProduct.id}`)
                    }
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}