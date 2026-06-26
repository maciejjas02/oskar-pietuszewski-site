import { useState } from 'react';
import PlayerProfile from './components/PlayerProfile';
import Schedule from './components/Schedule';
import oskarImg from './assets/oskar_png.png';
import oskarJaga from './assets/oskar_jaga.png';
import oskarPolsa from './assets/oskar_polska.png';
import oskarEurope from './assets/cns.png';

import './index.css';


const VIEWS_DATA = {
  jaga_24_25: {
    id: 'jaga_24_25',
    bgClass: 'bg-[#0b0804]',
    glowClass: 'from-yellow-500/20 to-red-500/20',
    accentColor: 'text-yellow-400',
    borderColor: 'border-yellow-500/30',
    borderActive: 'border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)]',
    titleAccent: 'text-yellow-400',
    subtitle: 'Jagiellonia Białystok • Sezon 24/25',
    marketValue: '€350,000',
    image: oskarJaga,
    imageClassName: 'max-w-md md:max-w-lg',
    stats: [
      { title: 'Rozegrane mecze', value: '28', icon: '🏟️' },
      { title: 'Bramki', value: '12', icon: '⚽' },
      { title: 'Asysty', value: '6', icon: '👟' },
    ],
    info: [
      { label: 'Klub', value: 'Jagiellonia' },
      { label: 'Wiek', value: '17 lat' },
      { label: 'Sukces', value: 'Mistrzostwo PL' }
    ],
    fixtures: [
      { id: 1, date: 'Mecz Historyczny', time: 'Zakończony', home: 'Jagiellonia', away: 'Warta Poznań', type: 'Ekstraklasa', status: 'past' }
    ]
  },
  porto_25_26: {
    id: 'porto_25_26',
    bgClass: 'bg-[#040714]', // Głęboki granat Porto
    glowClass: 'from-blue-600/20 to-sky-400/10',
    accentColor: 'text-blue-400',
    borderColor: 'border-blue-500/20',
    borderActive: 'border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.3)]',
    titleAccent: 'text-blue-400',
    subtitle: 'FC Porto • Sezon 25/26',
    marketValue: '€450,000',
    image: oskarImg, 
    stats: [
      { title: 'Rozegrane mecze', value: '18', icon: '🏟️' },
      { title: 'Bramki', value: '7', icon: '⚽' },
      { title: 'Asysty', value: '4', icon: '👟' },
    ],
    info: [
      { label: 'Klub', value: 'FC Porto' },
      { label: 'Wiek', value: '18 lat' },
      { label: 'Noga', value: 'Prawa' }
    ],
    fixtures: [
      { id: 1, date: '14 Cze 2026', time: '20:00', home: 'FC Porto', away: 'Benfica', type: 'Liga Portugal 2', status: 'next' },
      { id: 2, date: '21 Cze 2026', time: '17:30', home: 'Feirense', away: 'FC Porto', type: 'Liga Portugal 2', status: 'upcoming' }
    ]
  },
  polska: {
    id: 'polska',
    bgClass: 'bg-[#0f0404]', // Narodowa krwista czerń
    glowClass: 'from-red-600/20 to-zinc-100/10',
    accentColor: 'text-red-500',
    borderColor: 'border-red-500/20',
    borderActive: 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]',
    titleAccent: 'text-red-500',
    subtitle: 'Reprezentacja Polski',
    marketValue: 'Krajowy Profil',
    image: oskarPolsa, 
    stats: [
      { title: 'Mecze w kadrze', value: '10', icon: '🦅' },
      { title: 'Gole dla PL', value: '4', icon: '⚽' },
      { title: 'Debiut', value: 'U17', icon: '✨' },
    ],
    info: [
      { label: 'Orzełek', value: 'Polska' },
      { label: 'Status', value: 'Reprezentant' },
      { label: 'Rola', value: 'Kluczowy gracz' }
    ],
    fixtures: [
      { id: 1, date: '18 Cze 2026', time: '16:00', home: 'Polska', away: 'Niemcy', type: 'Towarzyski', status: 'next' }
    ]
  },
  europe: {
    id: 'europe',
    bgClass: 'bg-[#050314]', // Magiczna noc Champions League
    glowClass: 'from-indigo-600/30 to-cyan-500/20',
    accentColor: 'text-cyan-400',
    borderColor: 'border-indigo-500/20',
    borderActive: 'border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)]',
    titleAccent: 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400',
    subtitle: 'Rozgrywki Europejskie • UEFA',
    marketValue: 'UEFA Champions League',
    image: oskarEurope, 
    stats: [
      { title: 'Mecze UEFA', value: '5', icon: '⭐' },
      { title: 'Bramki w pucharach', value: '2', icon: '🔥' },
      { title: 'Minuty UEFA', value: '380', icon: '⏱️' },
    ],
    info: [
      { label: 'Rozgrywki', value: 'Youth League' },
      { label: 'Faza', value: 'Główna' },
      { label: 'Prestiż', value: 'Maksymalny' }
    ],
    fixtures: [
      { id: 1, date: '24 Cze 2026', time: '15:00', home: 'FC Porto U19', away: 'Real Madrid U19', type: 'UEFA Youth League', status: 'next' }
    ]
  }
};

function App() {
  const [activeTab, setActiveTab] = useState('porto_25_26'); // Domyślnie Porto obecny sezon
  const currentData = VIEWS_DATA[activeTab];

  return (
    <div className={`min-h-screen ${currentData.bgClass} font-sans transition-colors duration-700 pb-16 px-4 md:p-8`}>
      
      {/* ================= PANEL NAWIGACYJNY (SUPER GUI) ================= */}
      <div className="max-w-4xl mx-auto mb-10 flex flex-col gap-3">
        {/* Rząd 1: Sezony */}
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => setActiveTab('jaga_24_25')}
            className={`p-4 rounded-xl font-bold uppercase text-xs md:text-sm tracking-wider border transition-all duration-300 text-left flex justify-between items-center bg-[#13151a]/60 backdrop-blur-md cursor-pointer ${activeTab === 'jaga_24_25' ? VIEWS_DATA.jaga_24_25.borderActive : VIEWS_DATA.jaga_24_25.borderColor + ' text-zinc-400 hover:text-white'}`}
          >
            <span>Sezon 2024/25</span>
            <span className="px-2 py-0.5 bg-red-600/20 text-red-400 border border-red-500/20 text-[10px] rounded">Jagiellonia</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('porto_25_26')}
            className={`p-4 rounded-xl font-bold uppercase text-xs md:text-sm tracking-wider border transition-all duration-300 text-left flex justify-between items-center bg-[#13151a]/60 backdrop-blur-md cursor-pointer ${activeTab === 'porto_25_26' ? VIEWS_DATA.porto_25_26.borderActive : VIEWS_DATA.porto_25_26.borderColor + ' text-zinc-400 hover:text-white'}`}
          >
            <span>Sezon 2025/26</span>
            <span className="px-2 py-0.5 bg-blue-600/20 text-blue-400 border border-blue-500/20 text-[10px] rounded">FC Porto</span>
          </button>
        </div>

        {/* Rząd 2: Kategorie specjalne */}
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => setActiveTab('polska')}
            className={`p-4 rounded-xl font-bold uppercase text-xs md:text-sm tracking-wider border transition-all duration-300 text-left flex justify-between items-center bg-[#13151a]/60 backdrop-blur-md cursor-pointer ${activeTab === 'polska' ? VIEWS_DATA.polska.borderActive : VIEWS_DATA.polska.borderColor + ' text-zinc-400 hover:text-white'}`}
          >
            <span>🦅 POLSKA</span>
            <span className="px-2 py-0.5 bg-zinc-100/10 text-red-500 border border-red-500/20 text-[10px] rounded font-black">PL</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('europe')}
            className={`p-4 rounded-xl font-bold uppercase text-xs md:text-sm tracking-wider border transition-all duration-300 text-left flex justify-between items-center bg-[#13151a]/60 backdrop-blur-md cursor-pointer ${activeTab === 'europe' ? VIEWS_DATA.europe.borderActive : VIEWS_DATA.europe.borderColor + ' text-zinc-400 hover:text-white'}`}
          >
            <span>⭐ EUROPA</span>
            <span className="px-2 py-0.5 bg-indigo-500/20 text-cyan-400 border border-cyan-400/20 text-[10px] rounded font-black">UCL</span>
          </button>
        </div>
      </div>

      {/* Dynamiczne komponenty dostające dane "z góry" */}
      <PlayerProfile current={currentData} />
      <Schedule fixtures={currentData.fixtures} accent={currentData.accentColor} />

    </div>
  );
}

export default App;