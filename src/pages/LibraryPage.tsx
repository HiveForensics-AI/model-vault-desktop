import React from 'react';
import {
  BookOpen,
  CheckCircle2,
  Database,
  HardDrive,
  Import,
  MoreVertical,
  Play,
  Search,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { mockModels } from '@/lib/mockData';
import { format } from '@/lib/format';

const categories = ['All Models', 'Ollama', 'LM Studio', 'llama.cpp', 'GGUF', 'Safetensors', 'Seeding', 'Recently Used'];

export default function LibraryPage() {
  const totalSize = mockModels.reduce((sum, model) => sum + model.sizeBytes, 0);

  return (
    <div className="space-y-5">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-4xl font-semibold flex items-center gap-3">
            <BookOpen size={32} className="text-primary" /> Local Library
          </h1>
          <p className="text-muted mt-2">Manage installed models, storage, runtimes, and seeding.</p>
        </div>
        <div className="flex gap-3">
          <button className="h-12 px-5 rounded-xl glass border border-border/40 flex items-center gap-2 hover:border-primary/40 transition">
            <Import size={18} /> Import Model
          </button>
          <button className="h-12 w-12 rounded-xl glass border border-border/40 grid place-items-center hover:border-primary/40 transition">
            <MoreVertical size={18} />
          </button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={<Database className="text-primary" />} title="Installed Models" value={`${mockModels.length}`} meta="3 added this week" />
        <StatCard icon={<HardDrive className="text-primary" />} title="Total Storage Used" value={format.bytes(totalSize)} meta="of 256 GB (59.6%)" />
        <StatCard icon={<Workflow className="text-primary" />} title="Currently Seeding" value="8" meta="86.4 MB/s total" />
        <StatCard icon={<CheckCircle2 className="text-cyan-400" />} title="Runtimes Connected" value="3" meta="All systems operational" />
      </section>

      <section className="flex flex-wrap items-center gap-2">
        {categories.map((c, i) => (
          <button
            key={c}
            className={`px-4 py-2 rounded-xl border text-sm ${
              i === 0 ? 'bg-primary/15 border-primary/40 text-primary' : 'bg-[#0c1422]/70 border-border/40 text-slate-200'
            }`}
          >
            {c}
          </button>
        ))}
        <div className="ml-auto min-w-[230px] md:min-w-[280px] relative">
          <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input className="w-full h-10 rounded-xl bg-[#0c1422]/70 border border-border/40 pl-9 pr-3" placeholder="Filter models..." />
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-5">
        <div className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-4">
          {mockModels.map((model) => (
            <article key={model.id} className="rounded-2xl bg-[#0b1320]/90 border border-border/60 p-4 hover:border-primary/40 transition">
              <div className="flex gap-3">
                <img src={model.imageUrl} alt={model.name} className="h-16 w-16 rounded-xl border border-border/40 object-cover" />
                <div className="min-w-0">
                  <h3 className="font-semibold text-lg truncate">{model.name}</h3>
                  <div className="mt-1 flex gap-2 text-xs text-muted">
                    <span className="px-2 py-1 rounded-md bg-slate-800/70">{model.format}</span>
                    <span className="px-2 py-1 rounded-md bg-slate-800/70">{model.quantization}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted mt-3">{format.bytes(model.sizeBytes)}</p>
              <div className="flex items-center justify-between mt-4 text-sm">
                <span className="text-primary flex items-center gap-1"><ShieldCheck size={15} /> Verified</span>
                <span className="text-emerald-400">Seeding</span>
              </div>
            </article>
          ))}
        </div>

        <aside className="space-y-4">
          <div className="glass rounded-2xl p-4 border border-border/40">
            <h3 className="font-semibold">Storage Overview</h3>
            <div className="mt-4 space-y-3 text-sm">
              <StorageBar label="Model Storage" value="152.6 GB / 256 GB" width="60%" color="bg-emerald-500" />
              <StorageBar label="Cache Storage" value="24.1 GB / 50 GB" width="48%" color="bg-indigo-500" />
              <StorageBar label="Free Space" value="103.3 GB / 306 GB" width="34%" color="bg-slate-500" />
            </div>
          </div>

          <div className="glass rounded-2xl p-4 border border-border/40">
            <h3 className="font-semibold mb-3">Runtime Integrations</h3>
            {['Ollama', 'LM Studio', 'llama.cpp'].map((runtime) => (
              <div key={runtime} className="flex items-center justify-between py-2 border-b border-border/20 last:border-none">
                <span>{runtime}</span>
                <span className="text-primary text-sm">Connected</span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="glass rounded-2xl border border-primary/30 p-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xl font-semibold">Coding Mistral 7B Q4</p>
          <p className="text-muted">Fine-tuned for coding assistants with strong reasoning and tool use.</p>
        </div>
        <button className="px-5 py-3 rounded-xl bg-primary text-black font-semibold flex items-center gap-2">
          <Play size={16} /> Run in Ollama
        </button>
      </section>
    </div>
  );
}

function StatCard({ icon, title, value, meta }: { icon: React.ReactNode; title: string; value: string; meta: string }) {
  return (
    <div className="glass rounded-2xl p-4 border border-border/40">
      <div className="flex items-center gap-3 text-slate-200">{icon}<span>{title}</span></div>
      <p className="text-4xl font-semibold mt-3">{value}</p>
      <p className="text-muted mt-2">{meta}</p>
    </div>
  );
}

function StorageBar({ label, value, width, color }: { label: string; value: string; width: string; color: string }) {
  return (
    <div>
      <div className="flex justify-between text-muted mb-2">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-2 rounded-full bg-slate-800">
        <div className={`h-2 rounded-full ${color}`} style={{ width }} />
      </div>
    </div>
  );
}
