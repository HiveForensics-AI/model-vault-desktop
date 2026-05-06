import React from 'react';

/**
 * RightPanel renders the download queue and system overview. It sits
 * alongside the main content on large screens and collapses on smaller
 * breakpoints (hidden via CSS). For this prototype, content is static.
 */
export default function RightPanel() {
  // Placeholder data for downloads queue
  const downloads = [
    {
      id: '1',
      name: 'Phi-3-mini-4k-instruct',
      progress: 0.72,
    },
    {
      id: '2',
      name: 'Llama-3-8B',
      progress: 0.35,
    },
  ];
  return (
    <aside className="hidden xl:flex flex-col w-72 border-l border-border bg-panel">
      {/* Downloads section */}
      <div className="p-4 border-b border-border">
          <h3 className="text-sm font-semibold mb-3">Downloads</h3>
          <div className="space-y-4">
            {downloads.map((item) => (
              <div key={item.id} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="truncate w-40" title={item.name}>{item.name}</span>
                  <span className="text-muted">{Math.round(item.progress * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-card rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary"
                    style={{ width: `${item.progress * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
      </div>
      {/* System overview section */}
      <div className="p-4">
        <h3 className="text-sm font-semibold mb-3">System</h3>
        <ul className="space-y-2 text-xs text-muted">
          <li className="flex justify-between">
            <span>RAM</span>
            <span>16 GB</span>
          </li>
          <li className="flex justify-between">
            <span>VRAM</span>
            <span>8 GB</span>
          </li>
          <li className="flex justify-between">
            <span>Storage</span>
            <span>512 GB</span>
          </li>
          <li className="flex justify-between">
            <span>Runtime</span>
            <span>Ollama</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}