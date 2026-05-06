import React from 'react';
import { Upload } from 'lucide-react';

export default function PublishPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold flex items-center gap-2">
        <Upload size={20} /> Publish
      </h1>
      <p className="text-muted">Coming soon: publish your own models via a guided wizard.</p>
    </div>
  );
}