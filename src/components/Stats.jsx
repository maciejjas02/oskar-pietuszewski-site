import React from 'react';

export default function Stats() {
  
  const seasonStats = [
    { label: 'Rozegrane mecze', value: '18', icon: '🏟️' },
    { label: 'Bramki', value: '7', icon: '⚽' },
    { label: 'Asysty', value: '4', icon: '👟' },
    { label: 'Minuty na boisku', value: '1240', icon: '⏱️' },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {seasonStats.map((stat, index) => (
        <div 
          key={index} 
          className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)]"
        >
          <div className="text-3xl mb-3">{stat.icon}</div>
          <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
          <div className="text-xs md:text-sm text-slate-400 uppercase tracking-widest font-semibold">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}