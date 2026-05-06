import React from 'react';
import { Users } from 'lucide-react';

export default function PeersPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold flex items-center gap-2">
        <Users size={20} /> Peers
      </h1>
      <p className="text-muted">Coming soon: monitor connected peers and network performance.</p>
    </div>
  );
}