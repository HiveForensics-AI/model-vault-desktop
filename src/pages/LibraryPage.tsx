import React from 'react';
import { Library } from 'lucide-react';

export default function LibraryPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold flex items-center gap-2">
        <Library size={20} /> Library
      </h1>
      <p className="text-muted">Coming soon: view and manage your installed models.</p>
    </div>
  );
}