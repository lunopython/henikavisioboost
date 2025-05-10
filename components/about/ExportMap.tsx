"use client";

import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip, 
  Legend 
} from "recharts";
import { EXPORT_DESTINATIONS } from "@/lib/constants";

export default function ExportMap() {
  // Couleurs personnalisées de notre thème de design
  const COLORS = [
    'hsl(var(--chart-1))', 
    'hsl(var(--chart-2))', 
    'hsl(var(--chart-3))', 
    'hsl(var(--chart-4))',
    'hsl(var(--chart-5))'
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-playfair font-bold mb-6 text-center">
        Notre Portée Mondiale
      </h3>
      
      <div className="h-[300px] lg:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={EXPORT_DESTINATIONS}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={({ country, percentage }) => `${country} : ${percentage}%`}
              outerRadius={130}
              innerRadius={70}
              fill="#8884d8"
              dataKey="percentage"
              nameKey="country"
              paddingAngle={2}
            >
              {EXPORT_DESTINATIONS.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                  stroke="white"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value}%`, 'Part des Exportations']}
              contentStyle={{
                backgroundColor: 'white',
                borderRadius: '0.375rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: 'none',
              }}
            />
            <Legend layout="horizontal" verticalAlign="bottom" align="center" />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
        {EXPORT_DESTINATIONS.map((destination, index) => (
          <div key={destination.country} className="bg-slate-50 p-3 rounded-lg">
            <div 
              className="w-4 h-4 mx-auto mb-2 rounded-full" 
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></div>
            <div className="font-medium text-sm">{destination.country}</div>
            <div className="text-emerald-700 font-bold">{destination.percentage}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}