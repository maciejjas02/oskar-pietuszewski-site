import React from 'react';

export default function Schedule() {
  // Mockowane dane - w przyszłości tutaj wpadnie odpowiedź z API
  const fixtures = [
    { id: 1, date: '14 Cze 2026', time: '20:00', home: 'Jagiellonia Białystok', away: 'Legia Warszawa', type: 'Ekstraklasa', status: 'next' },
    { id: 2, date: '21 Cze 2026', time: '17:30', home: 'Lech Poznań', away: 'Jagiellonia Białystok', type: 'Ekstraklasa', status: 'upcoming' },
    { id: 3, date: '28 Cze 2026', time: '19:00', home: 'Jagiellonia Białystok', away: 'Raków Częstochowa', type: 'Ekstraklasa', status: 'upcoming' },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-16 p-4">
      {/* Nagłówek sekcji */}
      <h2 className="text-3xl font-black text-white uppercase tracking-wider mb-8 border-l-4 border-yellow-500 pl-4">
        Nadchodzące mecze
      </h2>
      
      {/* Lista meczów */}
      <div className="flex flex-col gap-4">
        {fixtures.map((match) => (
          <div 
            key={match.id} 
            className={`flex flex-col md:flex-row items-center justify-between p-6 rounded-2xl border transition-all duration-300 ${
              match.status === 'next' 
                ? 'bg-gradient-to-r from-[#1a1d24] to-[#13151a] border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.1)]' 
                : 'bg-[#13151a] border-zinc-800/80 hover:border-zinc-700'
            }`}
          >
            {/* Lewa strona: Data i rozgrywki */}
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 min-w-[160px]">
              <span className="text-yellow-500 font-bold tracking-widest text-sm uppercase">{match.date}</span>
              <span className="text-zinc-500 text-xs mt-1 font-semibold tracking-wider">{match.type} • {match.time}</span>
            </div>

            {/* Środek: Zespoły (Jagiellonia będzie na biało, przeciwnik na szaro) */}
            <div className="flex items-center gap-4 md:gap-8 flex-1 justify-center w-full">
              <span className={`text-lg md:text-xl font-bold text-right flex-1 ${match.home.includes('Jagiellonia') ? 'text-white' : 'text-zinc-400'}`}>
                {match.home}
              </span>
              
              <div className="bg-[#09090b] px-4 py-2 rounded-lg border border-zinc-800 text-zinc-600 font-black text-sm shadow-inner">
                VS
              </div>
              
              <span className={`text-lg md:text-xl font-bold text-left flex-1 ${match.away.includes('Jagiellonia') ? 'text-white' : 'text-zinc-400'}`}>
                {match.away}
              </span>
            </div>
            
            {/* Prawa strona: Status spotkania */}
            <div className="mt-4 md:mt-0 min-w-[160px] flex justify-center md:justify-end">
              {match.status === 'next' ? (
                <span className="animate-pulse px-4 py-2 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-full text-xs font-bold uppercase tracking-wider">
                  Najbliższy mecz
                </span>
              ) : (
                <span className="px-4 py-2 bg-zinc-900/50 text-zinc-600 border border-zinc-800 rounded-full text-xs font-bold uppercase tracking-wider">
                  Oczekujący
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}