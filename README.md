# Portfolio

Personal site for [Sean Lai](https://github.com/seanlai16).

**Live: [https://portfolio-seanlai16-5342.vercel.app](https://portfolio-seanlai16-5342.vercel.app)**

Next.js, TypeScript, Tailwind. This repo is the website only.

Product decisions, content model, deploy notes, and progress: **[CONTEXT.md](CONTEXT.md)**. Agent working rules: [AGENTS.md](AGENTS.md).

## Setup

Node 22 (see `.nvmrc`):

```bash
nvm use
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

GitHub does not auto-deploy yet. After pushing `main`:

```bash
npx vercel@latest deploy --yes --prod --scope seanlai16-5342
```
