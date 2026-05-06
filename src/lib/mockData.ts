import { ModelSummary, ModelDetail } from './types';

// Generate some dummy models for the discovery page. These are not real
// models; they serve to populate the UI until backend integration.
export const mockModels: ModelSummary[] = [
  {
    id: 'phi3-4k',
    name: 'Phi-3 mini 4K Instruct',
    creator: 'Microsoft',
    family: 'Phi',
    task: 'Text Generation',
    format: 'Safetensors',
    sizeBytes: 4.2 * 1024 * 1024 * 1024,
    quantization: 'int4',
    runtime: ['Ollama', 'llama.cpp'],
    license: 'MIT',
    seeders: 42,
    peers: 8,
    rating: 4.5,
    downloads: 360,
    trustLevel: 'hash_verified',
    compatibility: 'excellent',
    tags: ['instruct', 'small'],
  },
  {
    id: 'llama3-8b',
    name: 'Llama 3 8B',
    creator: 'Meta',
    family: 'Llama',
    task: 'Text Generation',
    format: 'GGUF',
    sizeBytes: 8 * 1024 * 1024 * 1024,
    runtime: ['llama.cpp', 'LM Studio'],
    license: 'Apache 2.0',
    seeders: 65,
    peers: 12,
    rating: 4.8,
    downloads: 580,
    trustLevel: 'verified_creator',
    compatibility: 'good',
    tags: ['large', 'chat'],
  },
  {
    id: 'mistral-7b',
    name: 'Mistral 7B Instruct',
    creator: 'MistralAI',
    family: 'Mistral',
    task: 'Text Generation',
    format: 'Safetensors',
    sizeBytes: 7 * 1024 * 1024 * 1024,
    runtime: ['Transformers'],
    license: 'Mistral AI License',
    seeders: 23,
    peers: 9,
    rating: 4.3,
    downloads: 210,
    trustLevel: 'unverified',
    compatibility: 'warning',
    tags: ['medium', 'instruct'],
  },
];

// Provide a dummy detail by extending a summary. Real code would fetch this
// data via a query and update the store. Here we duplicate summary fields
// and add detail-specific fields to simulate the UI.
export function getDetail(modelId: string): ModelDetail | undefined {
  const base = mockModels.find((m) => m.id === modelId);
  if (!base) return undefined;
  return {
    ...base,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    version: '1.0.0',
    publishedAt: '2024-04-01',
    files: [
      {
        path: `${base.id}.bin`,
        sizeBytes: base.sizeBytes,
        hash: 'abc123',
        chunkCount: 512,
        verified: true,
      },
    ],
    requirements: {
      minRamGb: 8,
      recommendedRamGb: 16,
      minVramGb: 4,
      gpuOptional: true,
    },
    manifestHash: 'deadbeef',
  };
}