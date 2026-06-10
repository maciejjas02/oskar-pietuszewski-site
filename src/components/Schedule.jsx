import React from 'react';

export default function Schedule({ fixtures, accent }) {
  return (
    <div className="max-w-7xl mx-auto mt-16 p-4">
      <h2 className="text-3xl font-black text-white uppercase tracking-wider mb-8 border-l-4 border-zinc-700 pl-4">
        Terminarz rozgrywek
      </h2>
      
      <div className="flex flex-col gap-4">
        {fixtures.map((match) => (
          <div 
            key={match.id} 
            className={`flex flex-col md:flex-row items-center justify-between p-6 rounded-2xl border bg-[#13151a]/80 backdrop-blur-sm border-zinc-800/80 transition-all duration-300`}
          >
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 min-w-[160px]">
              <span className={`font-bold tracking-widest text-sm uppercase ${accent}`}>{match.date}</span>
              <span className="text-zinc-500 text-xs mt-1 font-semibold tracking-wider">{match.type} • {match.time}</span>
            </div>

            <div className="flex items-center gap-4 md:gap-8 flex-1 justify-center w-full">
              <span className={`text-lg md:text-xl font-bold text-right flex-1 ${match.home.includes('Oskar') || match.home.includes('Jagiellonia') || match.home.includes('Polska') || match.home.includes('Porto') ? 'text-white' : 'text-zinc-500'}`}>
                {match.home}
              </span>
              <div className="bg-[#09090b] px-4 py-2 rounded-lg border border-zinc-800 text-zinc-600 font-black text-sm">
                VS
              </div>
              <span className={`text-lg md:text-xl font-bold text-left flex-1 ${match.away.includes('Oskar') || match.away.includes('Jagiellonia') || match.away.includes('Polska') || match.away.includes('Porto') ? 'text-white' : 'text-zinc-500'}`}>
                {match.away}
              </span>
            </div>
            
            <div className="mt-4 md:mt-0 min-w-[160px] flex justify-center md:justify-end">
              {match.status === 'next' ? (
                <span className="animate-pulse px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-full text-xs font-bold uppercase tracking-wider">
                  Mecz przed nami
                </span>
              ) : (
                <span className="px-4 py-2 bg-zinc-900/50 text-zinc-600 border border-zinc-800 rounded-full text-xs font-bold uppercase tracking-wider">
                  Archiwum / Inne
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}