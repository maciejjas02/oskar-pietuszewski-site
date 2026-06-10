import React from 'react';

export default function PlayerProfile({ current }) {
  return (
    <div className="max-w-7xl mx-auto p-4 transition-all duration-500">
      
      {/* Tytuł */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-2">
          Oskar <span className={`transition-colors duration-500 ${current.accentColor}`}>{current.id === 'europe' ? 'Pietuszewski' : 'Pietuszewski'}</span>
        </h1>
        <p className="text-xl text-zinc-400 tracking-widest uppercase font-semibold transition-all">
          {current.subtitle}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        {/* LEWA KOLUMNA - DYNAMICZNE STATYSTYKI */}
        <div className="flex flex-col gap-5 order-2 lg:order-1">
          {current.stats.map((stat, i) => (
            <div key={i} className="bg-[#13151a]/90 backdrop-blur-sm p-6 rounded-2xl border border-zinc-800/80 shadow-xl flex items-center justify-between group hover:border-zinc-700 transition-all duration-300">
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-1">{stat.title}</p>
                <p className="text-4xl font-black text-white">{stat.value}</p>
              </div>
              <div className="text-4xl opacity-80 group-hover:scale-110 transition-transform">{stat.icon}</div>
            </div>
          ))}
        </div>

        {/* ŚRODKOWA KOLUMNA - DYNAMICZNE ZDJĘCIE ORAZ POŚWIATA */}
        <div className="relative flex justify-center order-1 lg:order-2 group">
          {/* Dynamiczna poświata zależna od wybranego motywu */}
          <div className={`absolute inset-0 bg-gradient-to-tr ${current.glowClass} blur-3xl rounded-full transform scale-95 group-hover:scale-105 transition-all duration-700`}></div>
          
          <img 
            src={current.image} 
            alt="Oskar Pietuszewski" 
            className="relative z-10 w-full max-w-sm drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)] object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* PRAWA KOLUMNA - WARTOŚĆ I DANE */}
        <div className="flex flex-col gap-5 order-3">
          <div className="bg-[#13151a]/90 backdrop-blur-sm p-8 rounded-3xl border border-zinc-800/80 shadow-2xl relative overflow-hidden">
            <p className="text-zinc-500 text-sm uppercase tracking-widest font-bold mb-2">Status / Wartość</p>
            <p className={`text-4xl font-black mb-2 transition-colors duration-500 ${current.accentColor}`}>{current.marketValue}</p>
            <p className="text-xs text-zinc-600">Profil zsynchronizowany</p>
          </div>
          
          {current.info.map((inf, i) => (
            <div key={i} className="bg-[#13151a]/90 backdrop-blur-sm px-6 py-4 rounded-xl border border-zinc-800/80 shadow-md flex justify-between items-center">
              <span className="text-zinc-500 font-semibold text-sm uppercase tracking-wider">{inf.label}</span>
              <span className="text-white font-bold text-lg">{inf.value}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}