import React from 'react';
import {
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  Circle,
  Download,
  Filter,
  FolderOpen,
  Import,
  Pause,
  Play,
  Plus,
  Search,
  Upload,
  X,
} from 'lucide-react';

type Transfer = {
  name: string;
  tag: string;
  profile: string;
  progress: number;
  amount: string;
  speed: string;
  eta: string;
  peers: string;
  seeds: string;
  verify: string;
  color: string;
  status: 'downloading' | 'queued' | 'completed' | 'seeding';
};

const transferRows: Transfer[] = [
  {
    name: 'Coding Mistral 7B Q4',
    tag: 'Q4_K_M',
    profile: 'GGUF',
    progress: 59.8,
    amount: '2.45 GB / 4.10 GB',
    speed: '61.2 MB/s',
    eta: '00:00:27',
    peers: '32 / 48',
    seeds: '156',
    verify: '72%',
    color: 'bg-emerald-400',
    status: 'downloading',
  },
  {
    name: 'DeepSeek Coder 6.7B',
    tag: 'Q4_K_M',
    profile: 'GGUF',
    progress: 93.9,
    amount: '3.10 GB / 3.30 GB',
    speed: '0 B/s',
    eta: '00:00:00',
    peers: '18 / 24',
    seeds: '87',
    verify: '93%',
    color: 'bg-sky-400',
    status: 'downloading',
  },
  {
    name: 'Qwen2 7B Instruct Q5',
    tag: 'Q5_K_M',
    profile: 'GGUF',
    progress: 0,
    amount: '0 B / 4.68 GB',
    speed: 'Position 2 of 3',
    eta: 'Queued',
    peers: '12',
    seeds: '35',
    verify: '0%',
    color: 'bg-amber-400',
    status: 'queued',
  },
  {
    name: 'Phi-3 Mini 4K Instruct',
    tag: 'Q4_K_M',
    profile: 'GGUF',
    progress: 100,
    amount: '4.25 GB / 4.25 GB',
    speed: 'Completed',
    eta: '2m ago',
    peers: '0',
    seeds: '0',
    verify: '100%',
    color: 'bg-emerald-400',
    status: 'completed',
  },
  {
    name: 'Llama 3.1 8B Q5_K_M',
    tag: 'Q5_K_M',
    profile: 'GGUF',
    progress: 100,
    amount: '5.21 GB / 5.21 GB',
    speed: 'Upload 8.7 MB/s',
    eta: 'Seeding',
    peers: '24',
    seeds: '142',
    verify: 'Ratio 1.68',
    color: 'bg-emerald-400',
    status: 'seeding',
  },
];

export default function DownloadsPage() {
  return (
    <div className="grid grid-cols-1 gap-4 2xl:grid-cols-[minmax(0,1fr)_320px]">
      <section className="space-y-4">
        <header className="glass rounded-2xl p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight">Downloads</h1>
              <p className="mt-1 text-muted">Manage active transfers, verification, and seeding.</p>
            </div>
            <div className="flex gap-2 text-sm">
              <button className="rounded-xl border border-border/60 bg-slate-900/50 px-4 py-2"> <Plus className="inline mr-2" size={16}/>Add from URL</button>
              <button className="rounded-xl border border-border/60 bg-slate-900/50 px-4 py-2"> <Import className="inline mr-2" size={16}/>Import Model</button>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 xl:grid-cols-5">
            {[
              ['Active Downloads', '2', '87.3 MB/s', 'text-emerald-400'],
              ['Queued', '1', '23.4 GB', 'text-amber-300'],
              ['Seeding', '2', '12.4 MB/s', 'text-emerald-300'],
              ['Total Bandwidth', '99.7 MB/s', '↓ 87.3  ↑ 12.4', 'text-sky-300'],
              ['Disk Usage', '382.9 GB / 2.0 TB', '18.7%', 'text-emerald-300'],
            ].map(([title, value, sub, accent]) => (
              <div key={title} className="rounded-2xl border border-border/40 bg-[#0b1727]/70 p-4">
                <p className="text-sm text-muted">{title}</p>
                <p className={`mt-1 text-3xl font-semibold ${accent}`}>{value}</p>
                <p className="text-sm text-muted">{sub}</p>
              </div>
            ))}
          </div>
        </header>

        <section className="glass rounded-2xl p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="flex gap-2 text-sm">
              {['All 7', 'Active 2', 'Queued 1', 'Completed 2', 'Failed 0', 'Seeding 2'].map((pill, i) => (
                <button key={pill} className={`rounded-lg border px-3 py-1 ${i === 0 ? 'border-primary/40 bg-primary/10 text-primary' : 'border-border/50 text-muted'}`}>
                  {pill}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-border/50 bg-slate-900/40 px-3 py-2 text-muted w-80">
              <Search size={16} /> <span>Filter downloads...</span>
              <Filter className="ml-auto" size={16} />
            </div>
          </div>

          <div className="space-y-2">
            {transferRows.map((row) => (
              <div key={row.name} className="rounded-xl border border-border/40 bg-[#071323]/60 p-3">
                <div className="grid grid-cols-[minmax(0,2fr)_160px_140px_120px_96px] items-center gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-semibold leading-none">{row.name}</p>
                      <span className="rounded bg-slate-800/80 px-2 py-0.5 text-xs text-muted">{row.profile}</span>
                      <span className="rounded bg-slate-800/80 px-2 py-0.5 text-xs text-muted">{row.tag}</span>
                      <Circle className="ml-1" size={10} fill="currentColor" />
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-800">
                      <div className={`h-2 rounded-full ${row.color}`} style={{ width: `${row.progress}%` }} />
                    </div>
                    <p className="mt-1 text-sm text-muted">{row.amount} ({row.progress}%)</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-sky-300">{row.speed}</p>
                    <p className="text-muted">{row.eta}</p>
                  </div>
                  <div className="text-sm text-muted">
                    <p>Peers {row.peers}</p>
                    <p>Seeds {row.seeds}</p>
                  </div>
                  <div>
                    <p className="text-muted">Verify</p>
                    <p className="text-xl font-semibold">{row.verify}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    {row.status === 'downloading' ? <button className="rounded-lg border border-border/50 p-2"><Pause size={16} /></button> : null}
                    {row.status === 'queued' ? <button className="rounded-lg border border-border/50 p-2"><Play size={16} /></button> : null}
                    {(row.status === 'completed' || row.status === 'seeding') ? <button className="rounded-lg border border-border/50 p-2"><FolderOpen size={16} /></button> : null}
                    <button className="rounded-lg border border-red-400/50 p-2 text-red-400"><X size={16} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="glass rounded-2xl p-4">
          <div className="flex items-center gap-6 text-sm text-muted">
            <span>Active: 2</span><span>Queued: 1</span><span>Seeding: 2</span>
            <span className="text-sky-300 flex items-center gap-1"><ArrowDown size={14}/>87.3 MB/s</span>
            <span className="text-emerald-300 flex items-center gap-1"><ArrowUp size={14}/>12.4 MB/s</span>
            <span>Disk: 382.9 GB / 2.0 TB</span>
          </div>
        </section>
      </section>

      <aside className="space-y-4">
        <div className="glass rounded-2xl p-4">
          <h3 className="text-xl font-semibold mb-3">Queue Summary</h3>
          <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
            <div className="mx-auto h-28 w-28 rounded-full border-[14px] border-emerald-400/40 grid place-items-center">
              <div className="text-center"><p className="text-3xl font-semibold">7</p><p className="text-sm text-muted">Total</p></div>
            </div>
            <div className="space-y-1 text-sm text-muted">
              <p className="flex items-center justify-between"><span className="inline-flex items-center gap-2"><Circle size={10} fill="currentColor" className="text-emerald-400"/>Active</span><span>2</span></p>
              <p className="flex items-center justify-between"><span className="inline-flex items-center gap-2"><Circle size={10} fill="currentColor" className="text-sky-400"/>Queued</span><span>1</span></p>
              <p className="flex items-center justify-between"><span className="inline-flex items-center gap-2"><Circle size={10} fill="currentColor" className="text-lime-400"/>Completed</span><span>2</span></p>
              <p className="flex items-center justify-between"><span className="inline-flex items-center gap-2"><Circle size={10} fill="currentColor" className="text-amber-400"/>Seeding</span><span>2</span></p>
            </div>
          </div>
        </div>
        <div className="glass rounded-2xl p-4 space-y-3 text-sm">
          <h3 className="text-xl font-semibold">Bandwidth Controls</h3>
          <div className="flex justify-between"><span className="text-muted">Download Limit</span><span>100 MB/s</span></div>
          <div className="h-2 rounded-full bg-slate-800"><div className="h-2 w-2/3 rounded-full bg-emerald-400"/></div>
          <div className="flex justify-between"><span className="text-muted">Upload Limit</span><span>20 MB/s</span></div>
          <div className="h-2 rounded-full bg-slate-800"><div className="h-2 w-1/3 rounded-full bg-emerald-400"/></div>
          <div className="flex items-center justify-between"><span className="text-muted">Global Limits</span><CheckCircle2 className="text-emerald-400" size={18} /></div>
        </div>
      </aside>
    </div>
  );
}
