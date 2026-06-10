import React from 'react';
// Importujemy zdjęcie z folderu assets
import oskarImg from '../assets/oskar_png.png';

export default function PlayerProfile() {
  return (
    <div className="max-w-7xl mx-auto mt-8 p-4">
      
      {/* Główny nagłówek (Imię i Nazwisko nad wszystkim) */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-2">
          Oskar <span className="text-yellow-400">Pietuszewski</span>
        </h1>
        <p className="text-xl text-zinc-400 tracking-widest uppercase font-semibold">
          Jagiellonia Białystok • Napastnik
        </p>
      </div>

      {/* Grid: 3 kolumny na komputerze, 1 kolumna na telefonie */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        {/* LEWA KOLUMNA - Kafelki ze statystykami */}
        <div className="flex flex-col gap-5 order-2 lg:order-1">
          <StatCard title="Rozegrane mecze" value="18" icon="🏟️" />
          <StatCard title="Bramki" value="7" icon="⚽" />
          <StatCard title="Asysty" value="4" icon="👟" />
        </div>

        {/* ŚRODKOWA KOLUMNA - Zdjęcie Oskara */}
        <div className="relative flex justify-center order-1 lg:order-2 group">
          {/* Świecące tło pod zdjęciem (żółto-czerwony gradient dla Jagiellonii) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-red-500/20 blur-3xl rounded-full transform group-hover:scale-110 transition-transform duration-700"></div>
          
          {/* Zdjęcie (w CSS ustawiamy, żeby dopasowało się bez spłaszczania) */}
          <img 
            src={oskarImg} 
            alt="Oskar Pietuszewski" 
            className="relative z-10 w-full max-w-sm drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* PRAWA KOLUMNA - Wartość i dane fizyczne */}
        <div className="flex flex-col gap-5 order-3">
          
          {/* Wielki kafelek z wartością */}
          <div className="bg-[#13151a] p-8 rounded-3xl border border-zinc-800/80 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-3xl rounded-full"></div>
            <p className="text-zinc-500 text-sm uppercase tracking-widest font-bold mb-2">Wartość Rynkowa</p>
            <p className="text-5xl font-black text-green-400 mb-2">€450,000</p>
            <p className="text-xs text-zinc-600">Aktualizacja: Czerwiec 2026</p>
          </div>
          
          {/* Małe kafelki z danymi */}
          <InfoCard label="Wzrost" value="180 cm" />
          <InfoCard label="Wiek" value="18 lat" />
          <InfoCard label="Lepsza noga" value="Prawa" />
        </div>

      </div>
    </div>
  );
}

// --- POMOCNICZE KOMPONENTY (żeby nie powtarzać kodu) ---

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-[#13151a] p-6 rounded-2xl border border-zinc-800/80 shadow-xl flex items-center justify-between group hover:border-yellow-500/50 transition-colors duration-300">
      <div>
        <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-1">{title}</p>
        <p className="text-4xl font-black text-white">{value}</p>
      </div>
      <div className="text-4xl opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 filter grayscale group-hover:grayscale-0">
        {icon}
      </div>
    </div>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="bg-[#13151a] px-6 py-4 rounded-xl border border-zinc-800/80 shadow-md flex justify-between items-center hover:bg-[#1a1d24] transition-colors">
      <span className="text-zinc-500 font-semibold text-sm uppercase tracking-wider">{label}</span>
      <span className="text-white font-bold text-lg">{value}</span>
    </div>
  );
}