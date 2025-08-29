import React, { useState } from 'react';
import Hero3D from './components/Hero3D';
import LibraryCard from './components/LibraryCard';

export default function App() {
  const [game, setGame] = useState({
    title: 'Aurora Station',
    dewey: '794.6 AUR',
    sliders: {
      theme: 1,
      randomness: 1,
      interaction: 1,
      learning: 1,
      tempo: 1,
    },
  });

  return (
    <div className="min-h-screen bg-orange-50 text-slate-800">
      <Hero3D />
      <main className="relative mx-auto -mt-24 max-w-4xl px-4 pb-24">
        <div className="mx-auto">
          <LibraryCard
            value={game}
            onChange={setGame}
          />
        </div>
      </main>
    </div>
  );
}
