import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/rwKT-aWtlkdY-8UV/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-orange-100/40 via-orange-100/0 to-orange-50/90" />

      <div className="relative z-10 flex h-full items-end">
        <div className="w-full px-6 pb-10">
          <div className="inline-flex flex-col gap-2 rounded-2xl bg-white/70 px-5 py-4 shadow-lg ring-1 ring-white/60 backdrop-blur-sm">
            <h1 className="font-['IBM_Plex_Sans'] text-3xl font-semibold tracking-tight text-slate-900">
              Board Game Library Card
            </h1>
            <p className="text-sm text-slate-600">
              Classify tabletop experiences like a classic card catalog, then slide to define their feel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
