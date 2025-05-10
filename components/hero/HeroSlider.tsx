"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Handle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < window.innerHeight) {
        setParallaxOffset(scrollPosition * 0.4);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const startSlideTimer = () => {
      slideTimerRef.current = setTimeout(() => {
        goToNextSlide();
      }, 6000);
    };

    startSlideTimer();

    return () => {
      if (slideTimerRef.current) {
        clearTimeout(slideTimerRef.current);
      }
    };
  }, [currentSlide]);

  const goToNextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToPrevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const currentSlideData = HERO_SLIDES[currentSlide];

  return (
    <div className="relative h-[80vh] md:h-[90vh] overflow-hidden">
      {/* Image Slides */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-1000",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <div 
            className="absolute inset-0 parallax"
            style={{ 
              "--translate-y": `-${parallaxOffset}px`,
            } as any}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 hero-overlay"></div>
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-white">
            <h1 
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-500",
                isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
              )}
            >
              {currentSlideData.title}
            </h1>
            <p 
              className={cn(
                "text-lg md:text-xl mb-8 text-white/90 transition-all duration-500 delay-100",
                isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
              )}
            >
              {currentSlideData.subtitle}
            </p>
            <Button 
              size="lg" 
              className={cn(
                "bg-amber-500 hover:bg-amber-600 text-slate-900 transition-all duration-500 delay-200",
                isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
              )}
            >
              {currentSlideData.cta}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-2">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              index === currentSlide 
                ? "bg-white w-8" 
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}