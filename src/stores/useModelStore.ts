import create from 'zustand';
import { ModelSummary, ModelDetail } from '@/lib/types';

interface ModelStore {
  selectedModel?: ModelDetail | ModelSummary;
  setSelectedModel: (model: ModelDetail | ModelSummary) => void;
}

export const useModelStore = create<ModelStore>((set) => ({
  selectedModel: undefined,
  setSelectedModel: (model) => set({ selectedModel: model }),
}));