"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/products/ProductCard";
import { PRODUCT_CATEGORIES, PRODUCTS } from "@/lib/constants";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProducts = activeCategory === "all" 
    ? PRODUCTS 
    : PRODUCTS.filter(product => product.category === activeCategory);

  return (
    <div>
      <Tabs defaultValue="all" onValueChange={setActiveCategory} className="w-full">
        <TabsList className="w-full max-w-screen-lg mx-auto flex flex-wrap justify-center mb-8 h-auto bg-slate-100 p-1">
          <TabsTrigger 
            value="all"
            className="data-[state=active]:bg-emerald-700 data-[state=active]:text-white"
          >
            All Products
          </TabsTrigger>
          {PRODUCT_CATEGORIES.map(category => (
            <TabsTrigger 
              key={category.id}
              value={category.id}
              className="data-[state=active]:bg-emerald-700 data-[state=active]:text-white"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </TabsContent>
        
        {PRODUCT_CATEGORIES.map(category => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}