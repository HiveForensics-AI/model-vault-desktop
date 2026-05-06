import React from 'react';
import { useModelStore } from '@/stores/useModelStore';
import { getDetail } from '@/lib/mockData';
import { format } from '@/lib/format';
import RuntimeBadges from './RuntimeBadges';
import CompatibilityPanel from './CompatibilityPanel';

export default function ModelDetailPanel() {
  const { selectedModel } = useModelStore();
  if (!selectedModel) {
    return (
      <div className="flex items-center justify-center h-full text-muted">
        Select a model to see details
      </div>
    );
  }
  // Use the id to fetch a detailed object. In real app this would come
  // from an API; here we synthesise details from mock data.
  const detail = 'id' in selectedModel ? getDetail(selectedModel.id) : undefined;
  if (!detail) return null;
  return (
    <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 overflow-y-auto h-full">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold">{detail.name}</h2>
        <p className="text-sm text-muted">by {detail.creator}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {detail.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-panel rounded-full border border-border text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <CompatibilityPanel compatibility={detail.compatibility} />
      <RuntimeBadges runtimes={detail.runtime} />
      <div className="text-sm leading-relaxed text-muted">
        {detail.description}
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs text-muted">
        <div>
          <p className="font-medium text-text">Version</p>
          <p>{detail.version}</p>
        </div>
        <div>
          <p className="font-medium text-text">Published</p>
          <p>{detail.publishedAt}</p>
        </div>
        <div>
          <p className="font-medium text-text">License</p>
          <p>{detail.license}</p>
        </div>
        <div>
          <p className="font-medium text-text">Size</p>
          <p>{format.bytes(detail.sizeBytes)}</p>
        </div>
        <div>
          <p className="font-medium text-text">Seeders</p>
          <p>{detail.seeders}</p>
        </div>
        <div>
          <p className="font-medium text-text">Peers</p>
          <p>{detail.peers}</p>
        </div>
      </div>
      {/* Download button area - style changes based on compatibility */}
      <div className="mt-auto">
        <button
          className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${
            detail.compatibility === 'excellent'
              ? 'bg-primary text-bg hover:bg-green-400'
              : detail.compatibility === 'good'
              ? 'bg-blue text-bg hover:bg-blue-400'
              : detail.compatibility === 'warning'
              ? 'bg-warning text-bg hover:bg-yellow-400'
              : 'bg-border text-muted cursor-not-allowed'
          }`}
          disabled={detail.compatibility === 'unsupported'}
        >
          {detail.compatibility === 'warning'
            ? 'Download anyway'
            : detail.compatibility === 'unsupported'
            ? 'Not supported'
            : 'Download'}
        </button>
      </div>
    </div>
  );
}