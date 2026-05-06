import React from 'react';
import { Download } from 'lucide-react';

export default function DownloadsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold flex items-center gap-2">
        <Download size={20} /> Downloads
      </h1>
      <p className="text-muted">Coming soon: manage active and completed downloads.</p>
    </div>
  );
}