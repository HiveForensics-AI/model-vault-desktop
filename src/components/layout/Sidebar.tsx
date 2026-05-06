import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Library, Download, Upload, Users, Settings, Box } from 'lucide-react';

const navItems = [
  { label: 'Discover', path: '/', icon: Search },
  { label: 'Library', path: '/library', icon: Library },
  { label: 'Downloads', path: '/downloads', icon: Download },
  { label: 'Publish', path: '/publish', icon: Upload },
  { label: 'Peers', path: '/peers', icon: Users },
  { label: 'Settings', path: '/settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex w-72 border-r border-border/50 p-4 flex-col gap-4 bg-[#070d16]">
      <div className="glass rounded-2xl p-4 flex items-center gap-3">
        <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center"><Box size={25} /></div>
        <div><p className="font-semibold tracking-wide text-xl">MODEL VAULT</p><p className="text-muted text-sm">v0.1.0</p></div>
      </div>
      <nav className="space-y-2">
        {navItems.map(({ icon: Icon, ...item }) => (
          <NavLink key={item.path} to={item.path} className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl border transition ${isActive ? 'bg-primary/15 border-primary/40 text-primary' : 'border-transparent text-slate-300 hover:bg-slate-800/40'}`}>
            <Icon size={18} />{item.label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto glass rounded-2xl p-4 text-sm text-muted">
        <p className="text-text font-semibold mb-2">P2P NODE <span className="text-primary">ONLINE</span></p>
        <p>Connected Peers: 48</p><p>Upload: 12.4 MB/s</p><p>Download: 85.7 MB/s</p>
      </div>
    </aside>
  );
}
