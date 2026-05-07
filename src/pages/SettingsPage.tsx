import React from 'react';
import {
  Activity,
  Bell,
  Cog,
  Database,
  Download,
  Folder,
  Globe,
  HardDrive,
  Link as LinkIcon,
  Network,
  RefreshCw,
  Rocket,
  Search,
  Settings,
  Shield,
  Terminal,
  Wifi,
} from 'lucide-react';

function Card({ title, icon: Icon, children }: { title: string; icon: React.ComponentType<{ size?: number; className?: string }>; children: React.ReactNode }) {
  return (
    <section className="glass rounded-2xl p-4">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-slate-100">
        <Icon size={18} className="text-slate-300" />
        {title}
      </h3>
      <div className="space-y-3 text-slate-300">{children}</div>
    </section>
  );
}

function Row({ label, right }: { label: string; right: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="text-slate-300">{label}</span>
      <div>{right}</div>
    </div>
  );
}

const pill = 'rounded-xl border border-slate-700/60 bg-slate-900/50 px-3 py-2 text-sm';

export default function SettingsPage() {
  return (
    <div className="space-y-4 pb-6">
      <header className="space-y-2">
        <h1 className="text-4xl font-semibold flex items-center gap-3">
          <Settings size={34} className="text-slate-200" /> Settings
        </h1>
        <p className="text-muted text-lg">Control downloads, storage, runtimes, networking, privacy, and system behavior.</p>
      </header>

      <div className="flex flex-wrap gap-2 text-sm">
        {['General', 'Downloads', 'Seeding', 'Storage', 'Runtime Integrations', 'Network', 'Privacy & Safety', 'Developer'].map((tab, index) => (
          <button key={tab} className={`rounded-xl px-4 py-2 border ${index === 0 ? 'bg-primary/15 border-primary/40 text-primary glow' : 'bg-slate-900/50 border-slate-700/60 text-slate-300'}`}>
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr_1fr_320px] gap-4">
        <div className="xl:col-span-3 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <Card title="General" icon={Cog}>
            <Row label="Launch on startup" right={<span className="h-6 w-12 rounded-full bg-primary/80 inline-block" />} />
            <Row label="Auto-update Model Vault" right={<span className="h-6 w-12 rounded-full bg-primary/80 inline-block" />} />
            <Row label="Theme" right={<span className={pill}>Dark</span>} />
            <Row label="Language" right={<span className={pill}>English (US)</span>} />
            <Row label="Notifications" right={<Bell size={18} className="text-primary" />} />
          </Card>

          <Card title="Downloads" icon={Download}>
            <Row label="Default folder" right={<span className={`${pill} max-w-[200px] truncate inline-flex items-center gap-2`}><Folder size={15} />/ModelVault/Downloads</span>} />
            <Row label="Max concurrent" right={<span className={pill}>3</span>} />
            <Row label="Speed limit" right={<span className="text-primary">100 MB/s</span>} />
            <Row label="Upload limit" right={<span className="text-primary">50 MB/s</span>} />
            <Row label="Auto-import" right={<span className="h-6 w-12 rounded-full bg-primary/80 inline-block" />} />
          </Card>

          <Card title="Seeding" icon={Rocket}>
            <Row label="Seed after download" right={<span className="h-6 w-12 rounded-full bg-primary/80 inline-block" />} />
            <Row label="Seed ratio target" right={<span className={pill}>2.00</span>} />
            <Row label="Seed time limit" right={<span className={pill}>7 days</span>} />
            <Row label="Upload bandwidth cap" right={<span className="text-primary">50 MB/s</span>} />
            <div className="rounded-xl border border-primary/30 bg-primary/10 px-3 py-2 text-sm text-primary">Seeding 5 models • 152.6 GB shared</div>
          </Card>

          <Card title="Storage" icon={HardDrive}>
            <Row label="Models directory" right={<span className={`${pill} max-w-[200px] truncate inline-flex items-center gap-2`}><Database size={14} />/ModelVault/Models</span>} />
            <Row label="Cache size limit" right={<span className="text-slate-200">50 GB</span>} />
            <Row label="Disk usage" right={<span className="text-primary">152.6 / 256 GB</span>} />
            <button className="w-full rounded-xl border border-slate-700/60 bg-slate-900/50 p-2 text-sm">Clear Cache</button>
          </Card>

          <Card title="Runtime Integrations" icon={LinkIcon}>
            {['Ollama', 'LM Studio', 'llama.cpp'].map((rt, i) => (
              <div key={rt} className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-slate-900/50 p-2 text-sm">
                <span>{rt}</span>
                <span className={i === 2 ? 'text-cyan-400' : 'text-primary'}>{i === 2 ? 'Path Set' : 'Connected'}</span>
              </div>
            ))}
            <button className="w-full rounded-xl border border-slate-700/60 bg-slate-900/50 p-2 text-sm inline-flex items-center justify-center gap-2"><RefreshCw size={15} /> Rescan Runtimes</button>
          </Card>

          <Card title="Network" icon={Network}>
            <Row label="P2P node status" right={<span className="text-primary">Online</span>} />
            <Row label="Relay fallback" right={<span className="h-6 w-12 rounded-full bg-primary/80 inline-block" />} />
            <Row label="Listening port" right={<span className={pill}>6881</span>} />
            <Row label="UPnP" right={<span className="h-6 w-12 rounded-full bg-primary/80 inline-block" />} />
            <Row label="Peer discovery" right={<span className="h-6 w-12 rounded-full bg-primary/80 inline-block" />} />
          </Card>

          <Card title="Privacy & Safety" icon={Shield}>
            <Row label="Anonymous telemetry" right={<span className="h-6 w-12 rounded-full bg-primary/80 inline-block" />} />
            <Row label="Enforce safe file types" right={<span className="h-6 w-12 rounded-full bg-primary/80 inline-block" />} />
            <Row label="Block executable files" right={<span className="h-6 w-12 rounded-full bg-primary/80 inline-block" />} />
            <Row label="Require hash verification" right={<span className="h-6 w-12 rounded-full bg-primary/80 inline-block" />} />
          </Card>

          <Card title="Developer" icon={Terminal}>
            <Row label="Verbose logs" right={<span className="h-6 w-12 rounded-full bg-primary/80 inline-block" />} />
            <Row label="Log level" right={<span className={pill}>Info</span>} />
            <Row label="API endpoint" right={<span className={pill}>127.0.0.1:8080/api</span>} />
            <Row label="Experimental" right={<span className="h-6 w-12 rounded-full bg-slate-700 inline-block" />} />
          </Card>
        </div>

        <div className="space-y-4">
          <Card title="System Status" icon={Activity}>
            {['Core Service', 'P2P Network', 'Downloads', 'Index Service'].map((s) => (
              <div key={s} className="flex justify-between text-sm rounded-lg border border-slate-800 px-2 py-1.5">
                <span>{s}</span>
                <span className="text-primary">Operational</span>
              </div>
            ))}
            <button className="text-sm text-slate-300 inline-flex items-center gap-2"><RefreshCw size={14} /> Refresh</button>
          </Card>

          <Card title="Runtime Status" icon={Wifi}>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Ollama</span><span className="text-primary">Connected</span></div>
              <div className="flex justify-between"><span>LM Studio</span><span className="text-primary">Connected</span></div>
              <div className="flex justify-between"><span>llama.cpp</span><span className="text-cyan-400">Path Set</span></div>
            </div>
            <p className="text-primary text-sm mt-2">All runtimes operational</p>
          </Card>

          <Card title="Recent Config Activity" icon={Search}>
            {['Downloads folder changed', 'Seeding ratio updated', 'LM Studio reconnected', 'Network port updated', 'Cache cleared'].map((item) => (
              <div key={item} className="text-sm rounded-lg border border-slate-800 px-2 py-1.5">{item}</div>
            ))}
          </Card>

          <Card title="Storage Snapshot" icon={Globe}>
            <p className="text-4xl font-semibold text-slate-100">59.6%</p>
            <p className="text-sm text-muted">152.6 GB / 256 GB used</p>
            <div className="h-2 rounded-full bg-slate-800 overflow-hidden"><div className="h-full w-[60%] bg-primary" /></div>
          </Card>
        </div>
      </div>
    </div>
  );
}
