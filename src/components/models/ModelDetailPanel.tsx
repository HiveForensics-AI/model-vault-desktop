import React from 'react';
import { useModelStore } from '@/stores/useModelStore';
import { getDetail } from '@/lib/mockData';
import { format } from '@/lib/format';
import { BadgeCheck, Download } from 'lucide-react';

export default function ModelDetailPanel() {
  const { selectedModel } = useModelStore();
  if (!selectedModel) return <div className="glass rounded-2xl p-8 text-muted">Select a model to see details</div>;
  const detail = getDetail(selectedModel.id);
  if (!detail) return null;

  return (
    <div className="glass rounded-2xl p-6 flex gap-5 min-h-[500px]">
      <img src={detail.imageUrl} alt={detail.name} className="w-40 rounded-xl object-cover border border-border/50" />
      <div className="flex-1 space-y-4">
        <div>
          <h2 className="text-4xl font-semibold flex items-center gap-2">{detail.name} <BadgeCheck className="text-primary" size={24} /></h2>
          <div className="flex items-center gap-2 mt-2 text-muted">
            <img src={detail.creatorAvatarUrl} alt={detail.creator} className="h-9 w-9 rounded-full" />
            <span>{detail.creator}</span>
            <span className="text-primary text-xs font-semibold bg-primary/15 px-2 py-1 rounded-full">VERIFIED</span>
          </div>
        </div>
        <p className="text-slate-300 leading-relaxed max-w-3xl">{detail.description}</p>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 text-sm">
          <div><p className="text-muted">Format</p><p>{detail.format}</p></div>
          <div><p className="text-muted">Quantization</p><p>{detail.quantization}</p></div>
          <div><p className="text-muted">Size</p><p>{format.bytes(detail.sizeBytes)}</p></div>
          <div><p className="text-muted">License</p><p>{detail.license}</p></div>
        </div>
        <div className="pt-3 max-w-sm">
          <button className="w-full py-4 rounded-xl bg-primary text-black font-semibold text-xl flex items-center justify-center gap-2 glow"><Download size={20} /> Download</button>
        </div>
      </div>
    </div>
  );
}
