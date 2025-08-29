import React from 'react';

function Tick({ active }) {
  return (
    <span
      className={[
        'h-2 w-2 rounded-full border',
        active ? 'bg-orange-500 border-orange-500' : 'bg-white border-slate-300',
      ].join(' ')}
    />
  );
}

export default function TriSlider({ label, options, value, onChange }) {
  const [left, center, right] = options;

  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between">
        <span className="text-[11px] uppercase tracking-wider text-slate-500">{label}</span>
        <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-700">
          {options[value]}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="w-28 shrink-0 text-right text-sm text-slate-700">{left}</span>
        <div className="relative grow">
          <input
            type="range"
            min={0}
            max={2}
            step={1}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="range-slider w-full appearance-none bg-transparent"
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-[2px]">
            <Tick active={value === 0} />
            <Tick active={value === 1} />
            <Tick active={value === 2} />
          </div>
        </div>
        <span className="w-28 shrink-0 text-sm text-slate-700">{center}</span>
        <span className="w-28 shrink-0 text-sm text-slate-700">{right}</span>
      </div>
    </div>
  );
}

// Tailwind-compatible slider styling via global style injection
const style = document.createElement('style');
style.innerHTML = `
.range-slider::-webkit-slider-runnable-track { height: 6px; background: linear-gradient(to right, #fed7aa, #fecaca); border-radius: 9999px; }
.range-slider::-moz-range-track { height: 6px; background: linear-gradient(to right, #fed7aa, #fecaca); border-radius: 9999px; }
.range-slider:focus { outline: none; }
.range-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; height: 18px; width: 18px; border-radius: 9999px; background: white; border: 2px solid #f97316; margin-top: -6px; box-shadow: 0 1px 2px rgba(0,0,0,0.15) }
.range-slider::-moz-range-thumb { height: 18px; width: 18px; border-radius: 9999px; background: white; border: 2px solid #f97316; box-shadow: 0 1px 2px rgba(0,0,0,0.15) }
`;
document.head.appendChild(style);
