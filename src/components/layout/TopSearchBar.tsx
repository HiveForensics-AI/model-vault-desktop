import React from 'react';
import { Search, Bell, SlidersHorizontal } from 'lucide-react';

export default function TopSearchBar() {
  const filters = ['All Models', 'Task', 'Model Family', 'Size', 'Quantization', 'Format', 'Runtime', 'License'];
  return (
    <div className="px-5 pt-5">
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input className="w-full h-14 rounded-2xl glass pl-12 pr-4 text-base" placeholder="Search models, tags, creators..." />
        </div>
        <button className="glass h-12 w-12 rounded-xl grid place-items-center"><Bell size={18} /></button>
        <button className="glass h-12 w-12 rounded-xl grid place-items-center"><SlidersHorizontal size={18} /></button>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {filters.map((f, i) => <button key={f} className={`px-4 py-2 rounded-xl border text-sm ${i === 0 ? 'bg-primary/20 border-primary/40 text-primary' : 'glass border-border/30 text-slate-200'}`}>{f}</button>)}
      </div>
    </div>
  );
}
