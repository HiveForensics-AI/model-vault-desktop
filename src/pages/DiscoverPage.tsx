import React from 'react';
import { mockModels } from '@/lib/mockData';
import ModelCard from '@/components/models/ModelCard';
import ModelDetailPanel from '@/components/models/ModelDetailPanel';

/**
 * DiscoverPage is the home screen. It lists available models and
 * displays details when a model is selected. The grid layout adjusts
 * based on screen size. On large screens, the detail panel sits beside
 * the grid; on smaller screens it moves below.
 */
export default function DiscoverPage() {
  return (
    <div className="flex flex-col xl:flex-row gap-6">
      {/* Model list */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {mockModels.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
      {/* Detail panel on large screens */}
      <div className="hidden xl:block xl:w-96 h-[calc(100vh-10rem)] sticky top-0">
        <ModelDetailPanel />
      </div>
      {/* On smaller screens, show detail panel below */}
      <div className="block xl:hidden mt-4">
        <ModelDetailPanel />
      </div>
    </div>
  );
}