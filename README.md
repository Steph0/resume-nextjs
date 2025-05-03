# Resume - Next.js

## Description

Hosted on Vercel, check it out: <https://stephenmehaut.vercel.app/>

Resume built with Next.js 15+ (React). Tested with Testing Library.
I tried using TailwindCSS to discover it.

## Development

By default app will be available at <http://localhost:3000/>

### With Docker

```sh
 docker compose up --force-recreate --build -d
```

### With node and npm

Run in local using the following commands

```sh
npm ci
npm run dev
```

## Deployment

### Production

Automatic Continuous Delivery to production is done with Github Actions.

### Preview (staging)

Using a local [act](https://github.com/nektos/act) installation, you can trigger the Github Actions workflows and deploy on a Vercel preview environment.
Note that it requires a local `.secrets` file with valid credentials.

```sh
./bin/act -W '.github/workflows/main.yml'
```

## Third Parties I like and recommend

- Reactjs: <https://react.dev/>
- Nextjs: <https://nextjs.org/>
  - Template : <https://github.com/yahyaparvar/nextjs-template/tree/main>
- Testing library: <https://github.com/testing-library/react-testing-library>
- ACT: <https://github.com/nektos/act>
- NVM: <https://github.com/nvm-sh/nvm>
- Knip: <https://github.com/webpro-nl/knip>
