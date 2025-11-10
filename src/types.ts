export type Role = "user" | "assistant" | "system";

export interface ChatMessage {
  role: Role;
  content: string;
}

export interface ChatRequest {
  model: string;
  input?: string | string[] | ChatMessage[];
  messages?: ChatMessage[];
  prompt?: string;
  temperature?: number;
  max_tokens?: number;
  options?: Record<string, any>;
}

export interface ChatResponse {
  id?: string;
  output?: string;
  messages?: ChatMessage[];
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  [key: string]: any;
}

/**
 * Embeddings
 */
export interface EmbeddingRequest {
  model: string;
  text: string;
  options?: Record<string, any>;
}

export interface EmbeddingResponse {
  embedding: number[];
  dimensions: number;
  [key: string]: any;
}

/**
 * Images
 */
export interface ImageRequest {
  model: string;
  prompt: string;
  n?: number;
  size?: string;
  options?: Record<string, any>;
}

export interface ImageResponse {
  images: Array<{
    url?: string;
    base64?: string;
  }>;
  [key: string]: any;
}

/**
 * Speech-To-Text
 */
export interface SttRequest {
  model: string;
  audioUrl: string;
  options?: Record<string, any>;
}

export interface SttResponse {
  text: string;
  confidence?: number;
  [key: string]: any;
}

/**
 * Text-To-Speech
 */
export interface TtsRequest {
  model: string;
  text: string;
  voice?: string;
  options?: Record<string, any>;
}

export interface TtsResponse {
  audioBase64: string;
  duration?: number;
  [key: string]: any;
}

/**
 * Models Listing
 */
export interface ModelInfo {
  id: string;
  provider: string;
  features: string[];
}
