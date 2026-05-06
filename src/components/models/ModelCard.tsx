import React from 'react';
import { ModelSummary } from '@/lib/types';
import { useModelStore } from '@/stores/useModelStore';
import { Eye, Star } from 'lucide-react';
import { format } from '@/lib/format';

interface Props {
  model: ModelSummary;
}

export default function ModelCard({ model }: Props) {
  const { setSelectedModel, selectedModel } = useModelStore();
  const isActive = selectedModel?.id === model.id;

  return (
    <div
      onClick={() => setSelectedModel(model)}
      className={`cursor-pointer rounded-2xl p-4 border transition-all bg-[#0c1422]/90 ${
        isActive ? 'border-primary/90 shadow-[0_0_0_1px_rgba(34,255,117,0.35)]' : 'border-border/60 hover:border-primary/40'
      }`}
    >
      <div className="mb-3 h-16 w-16 rounded-xl overflow-hidden bg-[#131f32] border border-border/40">
        <img src={model.imageUrl} alt={model.name} className="h-full w-full object-cover" />
      </div>
      <h4 className="text-3xl/[1.15] xl:text-[38px] font-semibold tracking-tight mb-2">{model.name}</h4>
      <p className="text-muted text-xl mb-3">by {model.creator}</p>
      <div className="flex items-center gap-6 text-lg">
        <span className="flex items-center gap-1 text-yellow-300"><Star size={16} fill="currentColor" /> {model.rating.toFixed(1)}</span>
        <span className="text-slate-300">{format.bytes(model.sizeBytes)}</span>
        <span className="flex items-center gap-1 text-primary"><Eye size={16} /> {model.seeders}</span>
      </div>
    </div>
  );
}
