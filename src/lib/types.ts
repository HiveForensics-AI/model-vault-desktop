// Define the data contracts used in the front‑end. These interfaces mirror
// the specification in the product brief. In the first prototype we
// import static mock data using these types.

export type ModelFormat = 'GGUF' | 'Safetensors' | 'Ollama' | 'ONNX';

export type Runtime = 'Ollama' | 'LM Studio' | 'llama.cpp' | 'Transformers';

export type CompatibilityLevel = 'excellent' | 'good' | 'warning' | 'unsupported';

export interface ModelSummary {
  id: string;
  name: string;
  creator: string;
  family: string;
  task: string;
  format: ModelFormat;
  sizeBytes: number;
  quantization?: string;
  runtime: Runtime[];
  license: string;
  seeders: number;
  peers: number;
  rating: number;
  downloads: number;
  trustLevel: 'unverified' | 'hash_verified' | 'signed' | 'verified_creator';
  compatibility: CompatibilityLevel;
  tags: string[];
}

export interface ModelDetail extends ModelSummary {
  description: string;
  version: string;
  publishedAt: string;
  files: ModelFile[];
  requirements: ModelRequirements;
  manifestHash: string;
  creatorSignature?: string;
}

export interface ModelFile {
  path: string;
  sizeBytes: number;
  hash: string;
  chunkCount: number;
  verified: boolean;
}

export interface ModelRequirements {
  minRamGb: number;
  recommendedRamGb: number;
  minVramGb?: number;
  gpuOptional: boolean;
  cudaRequired?: boolean;
}

export type DownloadStatus =
  | 'queued'
  | 'connecting'
  | 'downloading'
  | 'paused'
  | 'verifying'
  | 'complete'
  | 'failed'
  | 'seeding';

export interface DownloadTransfer {
  id: string;
  modelId: string;
  modelName: string;
  status: DownloadStatus;
  progress: number;
  downloadedBytes: number;
  totalBytes: number;
  speedBytesPerSecond: number;
  peers: number;
  seeders: number;
  verifiedChunks: number;
  totalChunks: number;
  etaSeconds?: number;
}