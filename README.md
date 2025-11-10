# @orynt/ai-x402

A lightweight, provider-agnostic AI client with **HTTP-402 micropayment logic** built-in.  
Use the same unified API to interact with **OpenAI, Groq, Anthropic, Gradient, xAI Grok**, and more.

Designed for server environments (Node.js / Bun / Deno) and backend frameworks like **NestJS, Express, Fastify**.

---

## ✨ Features

- ✅ One consistent API for multiple AI providers
- 🔄 Easy provider switching (`openai`, `groq`, `anthropic`, `gradient`, `grok`, etc.)
- 💬 Unified `chat()` method across all models
- 🧾 Support for both `messages` (ChatML) and `input` (Claude/LLM input style)
- 🔐 Simple configuration
- ⚡ Ideal for backend & server-to-server usage
- 💸 Built-in support for **HTTP-402 paywall / metered token usage**

---

## 🚀 Installation

```sh
pnpm add @orynt/ai-x402


## Basic Usage

import { Orynt } from '@orynt/ai-x402';

const ai = new Orynt({
   baseUrl: 'http://localhost:3000/api/v1',
});

const response = await ai.chat({
messages: [{ role: 'user', content: 'Hello' }],
});
console.log(response);
```
