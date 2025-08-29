import React from 'react';

export default function CardHeader({ title, dewey, onTitleChange, onDeweyChange }) {
  return (
    <div className="grid gap-3 md:grid-cols-3 md:items-end">
      <div className="md:col-span-2">
        <label className="block text-xs uppercase tracking-wide text-slate-500">Board Game Title</label>
        <input
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          className="mt-1 w-full rounded-md border border-slate-300 bg-white/90 px-3 py-2 font-['IBM_Plex_Sans'] text-lg font-medium text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
          placeholder="Enter title"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wide text-slate-500">Dewey Decimal</label>
        <input
          value={dewey}
          onChange={(e) => onDeweyChange(e.target.value)}
          className="mt-1 w-full rounded-md border border-slate-300 bg-white/90 px-3 py-2 font-mono text-base text-slate-900 shadow-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
          placeholder="794.6 XXX"
        />
      </div>
    </div>
  );
}
