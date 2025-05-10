import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/constants";
import ContactSellerForm from "@/components/products/ContactSellerForm";

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const product = PRODUCTS.find(p => p.id === parseInt(params.id));
  
  if (!product) {
    notFound();
  }

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
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/30"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center text-white">
              <div className="mb-4 text-amber-500 font-medium uppercase tracking-wider">
                {product.category.replace(/-/g, ' ')}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-white/90">
                {product.description}
              </p>
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
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-700 rounded-full mr-3"></div>
                      Premium export grade quality
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-700 rounded-full mr-3"></div>
                      USDA Organic certified
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-700 rounded-full mr-3"></div>
                      Fair Trade certified
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-700 rounded-full mr-3"></div>
                      ISO 22000 compliant
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Packaging Options</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-700 rounded-full mr-3"></div>
                      Bulk packaging available
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-700 rounded-full mr-3"></div>
                      Custom packaging solutions
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-700 rounded-full mr-3"></div>
                      Eco-friendly materials
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Shipping Information</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-700 rounded-full mr-3"></div>
                      Worldwide shipping available
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-700 rounded-full mr-3"></div>
                      Air and sea freight options
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-700 rounded-full mr-3"></div>
                      Temperature-controlled containers
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">
                Contact Seller
              </h2>
              <ContactSellerForm productName={product.name} />
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
            {PRODUCTS.filter(p => 
              p.category === product.category && p.id !== product.id
            ).slice(0, 3).map(relatedProduct => (
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
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{relatedProduct.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{relatedProduct.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white"
                    onClick={() => window.location.href = `/products/${relatedProduct.id}`}
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