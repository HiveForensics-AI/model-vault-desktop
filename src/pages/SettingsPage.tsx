import React from 'react';
import { Settings } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold flex items-center gap-2">
        <Settings size={20} /> Settings
      </h1>
      <p className="text-muted">Coming soon: configure download preferences, storage, runtimes and more.</p>
    </div>
  );
}