"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const TIMELINE_EVENTS = [
  {
    year: "2010",
    title: "Fondation de l'Entreprise",
    description: "Henika Group a été fondée avec la vision de connecter des produits agricoles premium aux marchés mondiaux."
  },
  {
    year: "2013",
    title: "Lancement de la Division Épices",
    description: "Expansion des opérations avec une division dédiée aux épices et herbes, axée sur des exportations de qualité premium."
  },
  {
    year: "2016",
    title: "Certification Biologique",
    description: "Obtention des certifications biologiques USDA et UE pour l'ensemble de notre gamme de produits."
  },
  {
    year: "2018",
    title: "Ligne de Produits en Raphia",
    description: "Lancement de notre ligne de produits artisanaux en raphia, soutenant l'artisanat traditionnel et la durabilité."
  },
  {
    year: "2021",
    title: "Distribution Mondiale",
    description: "Extension du réseau de distribution pour atteindre plus de 30 pays sur 5 continents."
  },
  {
    year: "2024",
    title: "Emballages Durables",
    description: "Transition vers des emballages 100% écologiques pour tous les produits exportés."
  },
];

export default function CompanyTimeline() {
  const [activeEvent, setActiveEvent] = useState(TIMELINE_EVENTS.length - 1);

  return (
    <div className="relative py-8">
      {/* Ligne de la chronologie */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200"></div>
      
      {/* Événements de la chronologie */}
      <div className="relative">
        {TIMELINE_EVENTS.map((event, index) => (
          <div 
            key={event.year} 
            className={cn(
              "mb-12 flex items-center justify-center",
              index % 2 === 0 ? "md:justify-end" : "md:justify-start"
            )}
          >
            <div
              className={cn(
                "relative md:w-1/2 p-5 md:p-6 bg-white rounded-lg shadow-md transition-all duration-300",
                activeEvent === index ? "scale-105 shadow-lg border-l-4 border-emerald-700" : "",
                index % 2 === 0 ? "md:mr-8" : "md:ml-8"
              )}
              onMouseEnter={() => setActiveEvent(index)}
            >
              <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-700 z-10">
                <div 
                  className={cn(
                    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-emerald-700/20 transition-all duration-300",
                    activeEvent === index ? "opacity-100 scale-125" : "opacity-0 scale-100"
                  )}
                ></div>
              </div>
              
              <div 
                className={cn(
                  "absolute h-0.5 bg-slate-200 top-1/2 transform -translate-y-1/2 z-0",
                  index % 2 === 0 
                    ? "right-0 md:right-[-2rem] w-8 md:w-8" 
                    : "left-0 md:left-[-2rem] w-8 md:w-8"
                )}
              ></div>
              
              <span 
                className={cn(
                  "inline-block px-3 py-1 rounded-full text-xs font-medium mb-3",
                  activeEvent === index 
                    ? "bg-emerald-700 text-white" 
                    : "bg-slate-100 text-slate-700"
                )}
              >
                {event.year}
              </span>
              <h3 className="text-lg md:text-xl font-playfair font-bold mb-1">
                {event.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}