import React from 'react';
import CardHeader from './CardHeader';
import TriSlider from './TriSlider';

export default function LibraryCard({ value, onChange }) {
  const { title, dewey, sliders } = value;

  const updateSlider = (key, v) => {
    onChange({ ...value, sliders: { ...sliders, [key]: v } });
  };

  const paperTexture = {
    backgroundImage:
      'repeating-linear-gradient(0deg, rgba(15,23,42,0.05) 0px, rgba(15,23,42,0.05) 1px, rgba(250,246,233,1) 1px, rgba(250,246,233,1) 32px)',
  };

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute -left-3 top-8 h-3 w-3 rounded-full border border-slate-400 bg-orange-100 shadow" />
      <div className="absolute -right-3 top-8 h-3 w-3 rounded-full border border-slate-400 bg-orange-100 shadow" />

      <div
        className="rounded-xl border border-slate-300 bg-[#FAF6E9] shadow-xl ring-1 ring-white/50"
        style={paperTexture}
      >
        <div className="grid gap-6 p-6">
          <CardHeader
            title={title}
            dewey={dewey}
            onTitleChange={(t) => onChange({ ...value, title: t })}
            onDeweyChange={(d) => onChange({ ...value, dewey: d })}
          />

          <div className="grid gap-6">
            <TriSlider
              label="Theme"
              options={[
                'Abstract',
                'Decorated',
                'Immersive',
              ]}
              value={sliders.theme}
              onChange={(v) => updateSlider('theme', v)}
            />
            <TriSlider
              label="Randomness"
              options={[
                'Luck',
                'Tactical',
                'Skill',
              ]}
              value={sliders.randomness}
              onChange={(v) => updateSlider('randomness', v)}
            />
            <TriSlider
              label="Interaction"
              options={[
                'Solitaire',
                'Indirect',
                'Constant',
              ]}
              value={sliders.interaction}
              onChange={(v) => updateSlider('interaction', v)}
            />
            <TriSlider
              label="Learning"
              options={[
                'Intuitive',
                'Moderate',
                'Heavy',
              ]}
              value={sliders.learning}
              onChange={(v) => updateSlider('learning', v)}
            />
            <TriSlider
              label="Tempo"
              options={[
                'Fast',
                'Thoughtful',
                'Brain Melting',
              ]}
              value={sliders.tempo}
              onChange={(v) => updateSlider('tempo', v)}
            />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="rounded-md border border-slate-300 bg-white/80 p-3 text-sm">
              <div className="text-xs uppercase tracking-wide text-slate-500">Cataloged As</div>
              <div className="mt-1 font-mono text-slate-900">{dewey || '—'}</div>
            </div>
            <div className="rounded-md border border-slate-300 bg-white/80 p-3 text-sm md:col-span-2">
              <div className="text-xs uppercase tracking-wide text-slate-500">Summary</div>
              <div className="mt-1 text-slate-800">
                {title || 'Untitled'} leans {describe(sliders.theme, ['abstract play', 'decorated theme', 'deep immersion'])},
                skews {describe(sliders.randomness, ['toward luck', 'toward tactics', 'toward skill'])},
                with {describe(sliders.interaction, ['solo focus', 'indirect interaction', 'constant table talk'])}.
                Learning is {describe(sliders.learning, ['intuitive', 'moderate', 'heavy'])} and the tempo feels {describe(sliders.tempo, ['fast', 'thoughtful', 'brain-melting'])}.
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-300/70 bg-white/70 px-6 py-3">
          <span className="text-xs tracking-wide text-slate-500">Property of the Tabletop Archive</span>
          <span className="rounded-sm border border-slate-300 bg-orange-50 px-2 py-0.5 font-mono text-xs tracking-widest text-slate-700">
            CARD NO. {String(Math.abs(hashCode(title))).slice(0, 6)}
          </span>
        </div>
      </div>
    </div>
  );
}

function describe(index, words) {
  return words[index] || words[1];
}

function hashCode(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return h;
}
