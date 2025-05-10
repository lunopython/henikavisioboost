"use client";

import Image from "next/image";
import { TEAM_MEMBERS } from "@/lib/constants";

export default function Team() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {TEAM_MEMBERS.map((member, index) => (
        <div 
          key={member.name} 
          className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
        >
          <div className="relative h-72 overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-playfair font-bold mb-1">{member.name}</h3>
            <p className="text-amber-600 text-sm font-medium mb-3">{member.role}</p>
            <p className="text-slate-600 text-sm">{member.bio}</p>
          </div>
        </div>
      ))}
    </div>
  );
}