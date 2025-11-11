# @orynt/ai-x402

A lightweight, ai model-agnostic client providing unified access to AI models. With HTTPS-x402 micropayments using USDC, you pay only for what you use no subscriptions or API keys required.

---

## ✨ Features

- ✅ **Pay-As-You-Use** – Built-in HTTPS-x402 micropayments using USDC, so you only pay for what you consume.
- ✅ **model-Agnostic** - Interact with multiple AI models through a single unified API
- ✅ **No Subscriptions or API Keys** – Simplifies integration by using your crypto wallet or private key for authorization.
- ✅ **Unified AI Endpoints** – Chat, embeddings, image generation, speech-to-text, and text-to-speech in a consistent API

- 💸 Built-in support for **HTTP-402 paywall / metered token usage**

---

## Models

| Model                                     | Provider         | features                                                                 |
| ----------------------------------------- | ---------------- | ------------------------------------------------------------------------ |
| `gpt-4.1`                                 | Openai           | `chat`,`embeddings`,`image generation`,`speech-to-text`,`text-to-speech` |
| `gpt-4o-mini`                             | Openai           | `chat`,`embeddings`,`image generation`,`speech-to-text`,`text-to-speech` |
| `gpt-3.5-turbo`                           | Openai           | `chat`                                                                   |
| `o1-mini`                                 | Openai           | `chat`                                                                   |
| `text-embedding-3-small`                  | Openai           | `embeddings`                                                             |
| `whisper-1`                               | Openai           | `speech-to-text`                                                         |
| `gpt-4o-mini-tts`                         | Openai           | `text-to-speech`                                                         |
| `dall-e-3`                                | Openai           | `image-generation`                                                       |
| `qwen/qwen3-coder-480b-instruct-fp8`      | Gradient-network | `chat`                                                                   |
| `qwen/qwen3-coder-480b-instruct-fp8-free` | Gradient-network | `chat`                                                                   |
| `openai/gpt-oss-120b-free`                | Gradient-network | `chat`                                                                   |

---

## Supported Networks

| Network         |
| --------------- |
| `solana`        |
| `solana-devnet` |
| `base`          |
| `base-sepolia`  |
| `polygon`       |
| `polygon-amoy`  |

---

## 🚀 Installation

```bash
npm add @orynt/ai-x402
```

## Basic Usage

provide a PRIVATE_KEY=...walletPrivate in your .env

```typescript
import { Orynt } from "@orynt/ai-x402";

const ai = new Orynt({
  baseUrl: "http://localhost:3000/api/v1",
  network: "solana-devnet",
});

await ai.chat({
  model: "gpt-4.1",
  messages: [{ role: "user", content: "Hello" }],
});

await ai.chat({
  model: "gpt-4.1",
  input: "Explain the x402 in one sentence.",
});

await ai.chat({
  model: "gpt-4.1",
  prompt: "Explain the x402 in one sentence.",
});

await ai.generateImage({
  model: "dall-e-3",
  prompt: "A futuristic city skyline at sunset",
  n: 1,
  width: 1024,
  height: 1024,
});

await ai.textToSpeech({
  model: "gpt-4o-mini-tts",
  text: "Hello, welcome to X402 AI service.",
  voice: "alloy",
  format: "mp3",
});
```

---

## Future Enhancements

- [ ] Add browser support
- [ ] Support for multiple payment tokens

## License

MIT

## Credits

Built on top of:

- [x402 Protocol](https://github.com/coinbase/x402)
- [@solana/web3.js](https://github.com/solana-labs/solana-web3.js)
- [PayAI Network](https://payai.network)

---

**Note:** This is a beta release. The API is subject to change. Please report any issues on GitHub.
