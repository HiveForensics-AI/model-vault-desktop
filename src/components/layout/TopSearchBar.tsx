import React from 'react';
import { Search } from 'lucide-react';

/**
 * TopSearchBar displays a global search field and a row of filter pills. The
 * component does not manage state directly; parent pages can hook into
 * onChange or use Zustand stores for search and filter values. It still
 * provides a responsive layout that collapses elegantly on smaller
 * screens.
 */
export default function TopSearchBar() {
  const filters = [
    'Task',
    'Family',
    'Size',
    'Quantization',
    'Format',
    'Runtime',
    'License',
  ];
  return (
    <div className="border-b border-border bg-panel">
      <div className="flex items-center gap-4 px-6 py-3">
        {/* Search box */}
        <div className="relative flex-1 max-w-xl">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="text"
            placeholder="Search models, tags, creators..."
            className="w-full bg-card rounded-lg py-2 pl-9 pr-3 text-sm text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        {/* Optional action buttons can be added here */}
      </div>
      {/* Filter pills */}
      <div className="flex flex-wrap items-center gap-2 px-6 py-2">
        {filters.map((filter) => (
          <button
            key={filter}
            className="px-3 py-1 text-xs rounded-full bg-card hover:bg-cardHover border border-border text-muted hover:text-primary transition-colors"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}