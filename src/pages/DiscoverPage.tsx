import React from 'react';
import { Flame } from 'lucide-react';
import { mockModels } from '@/lib/mockData';
import ModelCard from '@/components/models/ModelCard';
import ModelDetailPanel from '@/components/models/ModelDetailPanel';

export default function DiscoverPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-3xl font-semibold flex items-center gap-2"><Flame className="text-primary" /> Featured Models</h2>
        <button className="text-primary">View all</button>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
        {mockModels.slice(0, 4).map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-4">
        <ModelDetailPanel />
        <div className="space-y-4">
          <button className="w-full py-5 text-3xl rounded-2xl bg-primary text-black font-semibold glow">⬇ Download</button>
          <button className="w-full py-4 rounded-2xl glass">Add to Library</button>
          <button className="w-full py-4 rounded-2xl glass">Share</button>
        </div>
      </div>
    </div>
  );
}
