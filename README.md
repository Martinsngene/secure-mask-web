<!-- @format -->

## Getting Started With App

To setup up project, use:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then you can run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Developing with Flow emulator

**Pre-Requisite**: To develop locally, make sure you have the Flow CLI installed: https://docs.onflow.org/flow-cli/install/

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start the emulator, deploy the contracts, followed by the development server:

```bash
flow emulator start
flow project deploy --network emulator
```
