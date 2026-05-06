import React from 'react';
import { ModelSummary } from '@/lib/types';
import { useModelStore } from '@/stores/useModelStore';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

function formatSize(bytes: number): string {
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  let i = 0;
  let value = bytes;
  while (value >= 1024 && i < sizes.length - 1) {
    value /= 1024;
    i++;
  }
  return `${value.toFixed(1)} ${sizes[i]}`;
}

function CompatibilityIcon({ level }: { level: ModelSummary['compatibility'] }) {
  switch (level) {
    case 'excellent':
      return <CheckCircle size={16} className="text-primary" />;
    case 'good':
      return <CheckCircle size={16} className="text-blue" />;
    case 'warning':
      return <AlertTriangle size={16} className="text-warning" />;
    case 'unsupported':
      return <XCircle size={16} className="text-danger" />;
    default:
      return null;
  }
}

interface Props {
  model: ModelSummary;
}

/**
 * ModelCard displays a compact summary of a model. Clicking a card will
 * update the selected model in the global store. Colour accents convey
 * compatibility state. Cards respond to hover to emphasise interactivity.
 */
export default function ModelCard({ model }: Props) {
  const { setSelectedModel } = useModelStore();
  return (
    <div
      onClick={() => setSelectedModel(model)}
      className="cursor-pointer bg-card hover:bg-cardHover border border-border rounded-2xl p-4 flex flex-col justify-between transition-colors"
    >
      <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex-1">
            <h4 className="text-sm font-semibold leading-tight mb-1 truncate">
              {model.name}
            </h4>
            <p className="text-xs text-muted truncate">by {model.creator}</p>
          </div>
          <CompatibilityIcon level={model.compatibility} />
      </div>
      <div className="flex flex-wrap text-xs text-muted gap-x-3 gap-y-1">
        <span>{formatSize(model.sizeBytes)}</span>
        <span>Seeders {model.seeders}</span>
        <span>Peers {model.peers}</span>
        <span>Rating {model.rating.toFixed(1)}</span>
      </div>
      <div className="mt-2 flex flex-wrap gap-1 text-[10px]">
        {model.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-full bg-panel text-muted border border-border"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}