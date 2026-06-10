import React from 'react';

export default function Hero() {
  return (
    <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl max-w-5xl mx-auto mt-10 border border-slate-800">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Zastępcze zdjęcie (awatar) */}
        <div className="w-48 h-48 bg-slate-800 rounded-full flex items-center justify-center overflow-hidden border-4 border-blue-600 shadow-[0_0_30px_rgba(37,99,235,0.3)] shrink-0">
          <span className="text-6xl">⚽</span>
        </div>

        {/* Główne informacje */}
        <div className="flex-1 text-center md:text-left">
          <div className="uppercase tracking-[0.2em] text-blue-400 font-bold text-xs mb-2">
            Napastnik
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 tracking-tight">Oskar Pietuszewski</h1>
          <p className="text-slate-400 text-xl mb-6 font-light">Jagiellonia Białystok</p>
          
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium border border-slate-700">Wzrost: 180 cm</span>
            <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium border border-slate-700">Wiek: 18 lat</span>
            <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium border border-slate-700">Noga: Prawa</span>
          </div>
        </div>

        {/* Wartość rynkowa */}
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center min-w-[220px] shadow-inner">
          <p className="text-slate-500 text-sm mb-2 uppercase tracking-wider font-semibold">Wartość rynkowa</p>
          <p className="text-4xl font-black text-emerald-400">€450,000</p>
          <p className="text-xs text-slate-600 mt-3">Aktualizacja: Czerwiec 2026</p>
        </div>

      </div>
    </div>
  );
}