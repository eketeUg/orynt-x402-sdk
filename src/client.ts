import fetch from "cross-fetch";
import {
  ChatRequest,
  ChatResponse,
  EmbeddingRequest,
  EmbeddingResponse,
  ImageRequest,
  ImageResponse,
  SttRequest,
  SttResponse,
  TtsRequest,
  TtsResponse,
  ModelInfo,
} from "./types";

export class Orynt {
  /**
   * @param config.baseUrl Base URL of the gateway
   * @param config.network Optional blockchain network: "solana-mainnet" | "solana-devnet" | "base-sepolia" | "base";
   */
  constructor(private config: { baseUrl: string; network?: string }) {}

  private async request<TResponse>(
    path: string,
    body: any
  ): Promise<TResponse> {
    const res = await fetch(`${this.config.baseUrl}${path}`, {
      method: "POST",
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`Request failed: ${res.status} ${await res.text()}`);
    }

    return res.json() as Promise<TResponse>;
  }

  async chat(params: ChatRequest): Promise<ChatResponse> {
    return await this.request("/ai/chat", params);
  }

  async embeddings(params: EmbeddingRequest): Promise<EmbeddingResponse> {
    return await this.request("/ai/embeddings", params);
  }

  async generateImage(params: ImageRequest): Promise<ImageResponse> {
    return await this.request("/ai/images", params);
  }

  async transcribeAudio(params: SttRequest): Promise<SttResponse> {
    return await this.request("/ai/stt", params);
  }

  async speechToText(params: TtsRequest): Promise<TtsResponse> {
    return await this.request("/ai/tts", params);
  }

  async listModels(): Promise<ModelInfo[]> {
    const r = await fetch(`${this.config.baseUrl}/ai/models`);
    return await r.json();
  }

  streamChat() {
    throw new Error("Streaming chat is not supported yet.");
  }

  streamEmbeddings() {
    throw new Error("Streaming embeddings is not supported yet.");
  }
}
