import React from 'react';

export default function RightPanel() {
  return (
    <aside className="hidden 2xl:flex w-[360px] p-5 border-l border-border/40 bg-[#070d16] overflow-y-auto">
      <div className="w-full space-y-4">
        <section className="glass rounded-2xl p-4">
          <h3 className="font-semibold mb-3">DOWNLOADS</h3>
          <div className="space-y-3 text-sm">
            {['Coding Mistral 7B Q4', 'DeepSeek Coder 6.7B', 'Qwen2 7B Instruct Q5'].map((n, i) => (
              <div key={n} className="rounded-xl bg-slate-900/60 p-3 border border-border/40">
                <p>{n}</p><p className="text-muted text-xs mt-1">{[68, 32, 0][i]}%</p>
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
