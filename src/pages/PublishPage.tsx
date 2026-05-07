import React from 'react';
import {
  CheckCircle2,
  ChevronDown,
  Copy,
  Eye,
  FileCode2,
  ShieldCheck,
  Upload,
} from 'lucide-react';

const checklist = [
  ['Files selected', '12 files'],
  ['Validation passed', 'All good'],
  ['Metadata complete', '100%'],
  ['Compatibility verified', 'Ready'],
  ['Manifest generated', '2.1 KB'],
  ['Publish settings set', 'Ready'],
];

export default function PublishPage() {
  return (
    <div className="space-y-4 pb-4">
      <section className="glass rounded-2xl p-5">
        <h1 className="text-4xl font-semibold flex items-center gap-3">
          <Upload className="text-primary" size={30} />
          Publish Model
        </h1>
        <p className="text-muted mt-1">Share a local model, generate a manifest, and start seeding.</p>

        <div className="mt-6 grid grid-cols-6 gap-4 text-sm">
          {['Select Files', 'Validate', 'Metadata', 'Compatibility', 'Manifest', 'Publish'].map((step, idx) => {
            const active = idx === 2;
            return (
              <div key={step} className="flex items-center gap-2 text-muted">
                <div className={`h-7 w-7 rounded-full grid place-items-center border ${active ? 'border-primary text-primary' : 'border-border text-slate-300'}`}>
                  {idx + 1}
                </div>
                <span className={active ? 'text-text font-medium' : ''}>{step}</span>
              </div>
            );
          })}
        </div>
      </section>

      <div className="grid grid-cols-1 2xl:grid-cols-[1fr_360px] gap-4">
        <div className="space-y-4">
          <div className="grid lg:grid-cols-2 gap-4">
            <section className="glass rounded-2xl p-5 border border-primary/40">
              <div className="h-full min-h-[240px] rounded-xl border border-dashed border-primary/40 bg-primary/5 grid place-items-center text-center p-5">
                <div>
                  <Upload className="mx-auto text-primary mb-4" size={44} />
                  <p className="text-2xl font-semibold">Drop model folder or files here</p>
                  <p className="text-muted mt-2">.gguf, .safetensors, tokenizer, json, txt</p>
                  <button className="mt-5 px-6 py-2 rounded-xl bg-slate-900 border border-border hover:border-primary/40 transition">Choose Files</button>
                </div>
              </div>
            </section>

            <section className="glass rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">Validation</h3>
                <span className="text-primary text-sm bg-primary/10 px-3 py-1 rounded-full">All checks passed</span>
              </div>
              <div className="mt-4 space-y-3 text-sm">
                {['File types allowed', 'No blocked executables', 'Safe file scan', 'Tokenizer config valid'].map((item, i) => (
                  <div key={item} className="flex items-center justify-between">
                    <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" />{item}</span>
                    <span className="text-muted">{['12 files', '0 detected', 'Clean', 'tokenizer.json'][i]}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm mb-2"><span>Hash generation</span><span>100%</span></div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden"><div className="h-full w-full bg-primary" /></div>
              </div>
            </section>
          </div>

          <section className="glass rounded-2xl p-5">
            <h3 className="text-2xl font-semibold mb-4">Metadata</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {['Model Name', 'Creator', 'Description', 'Model Family', 'Format', 'Task', 'Quantization'].map((f) => (
                <label key={f} className={`text-sm ${f === 'Description' ? 'md:col-span-2' : ''}`}>
                  <span className="text-muted">{f}</span>
                  <input className="mt-1 w-full bg-[#0a1118] border border-border rounded-lg px-3 py-2" defaultValue={f === 'Model Name' ? 'Coding Mistral 7B Q4' : f === 'Creator' ? 'cybernode' : ''} />
                </label>
              ))}
            </div>
          </section>

          <div className="grid lg:grid-cols-2 gap-4">
            <section className="glass rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3"><h3 className="text-xl font-semibold">Manifest Preview</h3><button className="border border-border rounded-lg px-3 py-1 text-sm flex items-center gap-2"><Copy size={14} />Copy</button></div>
              <pre className="text-xs bg-[#070d16] border border-border/50 rounded-xl p-4 text-slate-300 overflow-auto">{`{
  "name": "Coding Mistral 7B Q4",
  "creator": "cybernode",
  "format": "GGUF",
  "quantization": "Q4_K_M",
  "files": 12,
  "license": "Apache-2.0"
}`}</pre>
            </section>

            <section className="glass rounded-2xl p-5 space-y-3">
              <h3 className="text-xl font-semibold">Publishing Options</h3>
              {['Start seeding after publish', 'Private / unlisted', 'Publish to index'].map((opt, i) => (
                <div key={opt} className="flex items-center justify-between border border-border/50 rounded-xl px-3 py-2">
                  <span>{opt}</span>
                  <div className={`w-12 h-7 rounded-full p-1 ${i !== 1 ? 'bg-primary/40' : 'bg-slate-700'}`}><div className={`h-5 w-5 rounded-full bg-white ${i !== 1 ? 'ml-auto' : ''}`} /></div>
                </div>
              ))}
            </section>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            <button className="col-span-1 md:col-span-1 rounded-xl py-3 bg-primary text-black font-semibold">Publish &amp; Seed</button>
            <button className="rounded-xl py-3 border border-border bg-[#0a1118]">Save Draft</button>
            <button className="rounded-xl py-3 border border-border bg-[#0a1118] flex items-center justify-center gap-2"><Eye size={16} />Preview Manifest</button>
          </div>
        </div>

        <aside className="space-y-4">
          <section className="glass rounded-2xl p-5">
            <div className="flex items-center justify-between"><h3 className="text-xl font-semibold">Publish Checklist</h3><span className="text-primary">6 / 6 completed</span></div>
            <div className="h-2 rounded-full bg-slate-800 mt-3 overflow-hidden"><div className="h-full w-full bg-primary" /></div>
            <div className="mt-4 space-y-3">
              {checklist.map(([k, v]) => <div key={k} className="flex items-center justify-between text-sm"><span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" />{k}</span><span className="text-muted">{v}</span></div>)}
            </div>
          </section>

          <section className="glass rounded-2xl p-5">
            <h3 className="text-xl font-semibold mb-3">Safety & License Tips</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex gap-2"><ShieldCheck size={16} className="text-primary mt-0.5" />Ensure you have rights to share this model.</li>
              <li className="flex gap-2"><ShieldCheck size={16} className="text-primary mt-0.5" />Avoid sharing personal or proprietary data.</li>
              <li className="flex gap-2"><ShieldCheck size={16} className="text-primary mt-0.5" />Choose an appropriate license (Apache 2.0 / MIT).</li>
            </ul>
          </section>

          <section className="glass rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3"><h3 className="text-xl font-semibold">Connected Runtimes</h3><span className="text-primary">All Connected</span></div>
            {['Ollama v0.1.35', 'LM Studio v0.2.28', 'llama.cpp v0.2.37'].map((rt) => (
              <div key={rt} className="flex items-center justify-between border border-border/50 rounded-xl px-3 py-2 mb-2"><span>{rt}</span><span className="h-2 w-2 rounded-full bg-primary" /></div>
            ))}
          </section>
        </aside>
      </div>

      <div className="glass rounded-2xl p-3 flex items-center justify-between text-sm text-muted">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-primary" />All checks passed</span>
          <span className="flex items-center gap-2"><FileCode2 size={15} className="text-primary" />Index reachable</span>
        </div>
        <span className="flex items-center gap-2"><ChevronDown size={15} className="-rotate-90 text-primary" />All systems operational</span>
      </div>
    </div>
  );
}
