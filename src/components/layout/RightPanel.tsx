import React from 'react';
import { mockModels } from '@/lib/mockData';

export default function RightPanel() {
  return (
    <aside className="hidden 2xl:flex w-[360px] p-5 border-l border-border/40 bg-[#070d16] overflow-y-auto">
      <div className="w-full space-y-4">
        <section className="glass rounded-2xl p-4">
          <h3 className="font-semibold mb-3">DOWNLOADS</h3>
          <div className="space-y-3 text-sm">
            {mockModels.slice(0, 3).map((m, i) => (
              <div key={m.id} className="rounded-xl bg-slate-900/60 p-3 border border-border/40 flex gap-3 items-center">
                <img src={m.imageUrl} alt={m.name} className="h-12 w-12 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="truncate">{m.name}</p>
                  <p className="text-muted text-xs mt-1">{[68, 32, 0][i]}%</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="glass rounded-2xl p-4">
          <h3 className="font-semibold mb-3">SYSTEM OVERVIEW</h3>
          <div className="grid grid-cols-2 gap-3 text-sm"><div>CPU 18%</div><div>RAM 42%</div><div>VRAM 34%</div><div>Storage 23%</div></div>
        </section>
      </div>
    </aside>
  );
}
