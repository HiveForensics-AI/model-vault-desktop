import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Library, Download, Upload, Users, Settings } from 'lucide-react';

// Define navigation items with labels, icons and target paths. Using a
// separate constant makes it easy to map over items and add new ones.
const navItems = [
  { label: 'Discover', path: '/', icon: Home },
  { label: 'Library', path: '/library', icon: Library },
  { label: 'Downloads', path: '/downloads', icon: Download },
  { label: 'Publish', path: '/publish', icon: Upload },
  { label: 'Peers', path: '/peers', icon: Users },
  { label: 'Settings', path: '/settings', icon: Settings },
];

export default function Sidebar() {
  const location = useLocation();
  return (
    <aside className="hidden lg:flex flex-col w-64 h-full border-r border-border bg-panel">
      <div className="flex items-center justify-center h-16 border-b border-border">
        <span className="text-xl font-semibold text-primary">Model Vault</span>
      </div>
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-cardHover text-primary'
                    : 'text-muted hover:bg-cardHover hover:text-primary'
                }`
              }
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
      {/* Bottom status section */}
      <div className="p-4 border-t border-border space-y-2">
        <div className="flex items-center justify-between text-xs text-muted">
          <span>P2P Node</span>
          <span className="text-green-400">Online</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted">
          <div className="h-8 w-8 rounded-full bg-cardHover" />
          <div>
            <p className="leading-tight">User</p>
            <p className="text-xs text-muted">Free Tier</p>
          </div>
        </div>
      </div>
    </aside>
  );
}