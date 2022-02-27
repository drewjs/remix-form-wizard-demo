# Remix Form Wizard Demo

This demo shows how to create a multi-step form wizard in Remix.

## Preview

Open this example on [CodeSandbox](https://codesandbox.com):

[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/remix-run/remix/tree/main/examples/client-side-validation)

## Features

- Server-side rendering with progressive enhancement
- Deployable anywhere: Serverless, edge workers, or NodeJS server
- Built on standard [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- Authentication via Cookies (Plain JS)
- Error handling via Remix

## Tech Stack

- [Remix](https://remix.run/docs) as the server-side rendering framework
- [ESBuild](https://esbuild.github.io) (via Remix) for near-instant production builds
- [React](https://reactjs.org/docs/getting-started.html) for declarative UI
- [Typescript](https://www.typescriptlang.org/docs/) for static typing
- [Tailwind CSS](https://tailwindcss.com/docs/installation) for styles

### Code quality

- [Cypress](https://www.cypress.io) for acceptance testing
- [Vitest](https://vitest.dev) for unit testing
- [Eslint](https://remix.run/docs) for code linting
- [Prettier](https://remix.run/docs) for formatting

### Notable libraries

- [Dotenv](https://github.com/motdotla/dotenv) for storing configuration (see [Twelve-Factor App](http://12factor.net/config) Methodology)
- [Zod](https://remix.run/docs) for input parsing

Remix eliminates the need for additional auth, forms, fetching, state-management and other helper libraries.

## Setup and Run

Clone the repository:

```sh
git clone <repo_url> && cd <project_name>
```

Build and run the app:

```sh
npm install && npm run build && npm run start
```

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deploy

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
