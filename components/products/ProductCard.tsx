"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
}

export default function ProductCard({ id, name, category, description, image, featured }: ProductCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  
  const handleViewDetails = () => {
    router.push(`/products/${id}`);
  };
  
  return (
    <>
      <div 
        className={cn(
          "product-card bg-white rounded-lg overflow-hidden shadow-md cursor-pointer",
          featured && "border-2 border-amber-500"
        )}
        onClick={handleViewDetails}
      >
        <div className="relative h-48 sm:h-64 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="eager"
            className="object-cover transition-transform duration-700 hover:scale-110"
            quality={85}
          />
          {featured && (
            <div className="absolute top-2 right-2 bg-amber-500 text-xs text-slate-900 font-medium px-2 py-1 rounded-full">
              Featured
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="uppercase text-xs text-emerald-700 font-medium tracking-wider">
            {category.replace(/-/g, ' ')}
          </div>
          <h3 className="text-lg font-playfair font-bold mt-1 mb-2">{name}</h3>
          <p className="text-slate-600 text-sm line-clamp-2 mb-4">{description}</p>
          <div className="flex justify-between items-center">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-emerald-700 border-emerald-700 hover:text-white hover:bg-emerald-700"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
              }}
            >
              Quick View
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-slate-600 hover:text-emerald-700"
              onClick={(e) => {
                e.stopPropagation();
                handleViewDetails();
              }}
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Details
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden">
          <DialogClose className="absolute right-4 top-4 z-10 bg-white/80 rounded-full p-1">
            <X className="h-4 w-4" />
          </DialogClose>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-full overflow-hidden">
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="eager"
                className="object-cover"
                quality={90}
              />
            </div>
            <div className="p-6">
              <DialogHeader>
                <div className="uppercase text-xs text-emerald-700 font-medium tracking-wider mb-2">
                  {category.replace(/-/g, ' ')}
                </div>
                <DialogTitle className="text-2xl font-playfair">{name}</DialogTitle>
                <DialogDescription className="text-slate-600 mt-4">
                  {description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 space-y-4">
                <div className="text-sm">
                  <span className="font-medium">Origin:</span> Organic farms in Southeast Asia
                </div>
                <div className="text-sm">
                  <span className="font-medium">Quality:</span> Premium export grade
                </div>
                <div className="text-sm">
                  <span className="font-medium">Certifications:</span> USDA Organic, Fair Trade
                </div>
                <div className="text-sm">
                  <span className="font-medium">Minimum Order:</span> 500kg
                </div>
                <div className="flex justify-between gap-4 mt-8">
                  <Button 
                    className="w-full bg-emerald-700 hover:bg-emerald-800"
                    onClick={() => {
                      setIsOpen(false);
                      handleViewDetails();
                    }}
                  >
                    View Full Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}