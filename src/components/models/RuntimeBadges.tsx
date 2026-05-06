import React from 'react';
import { Runtime } from '@/lib/types';

interface Props {
  runtimes: Runtime[];
}

/**
 * RuntimeBadges shows which runtimes support the selected model. Each
 * runtime appears as a coloured pill. These colours are arbitrary and
 * chosen to differentiate between runtimes.
 */
export default function RuntimeBadges({ runtimes }: Props) {
  const colorMap: Record<Runtime, string> = {
    Ollama: 'bg-blue text-bg',
    'LM Studio': 'bg-purple text-bg',
    'llama.cpp': 'bg-primary text-bg',
    Transformers: 'bg-warning text-bg',
  };
  return (
    <div className="flex flex-wrap gap-2">
      {runtimes.map((rt) => (
        <span
          key={rt}
          className={`text-xs px-2 py-0.5 rounded-full font-medium ${colorMap[rt]}`}
        >
          {rt}
        </span>
      ))}
    </div>
  );
}