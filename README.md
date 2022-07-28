# MVP Starter Template

This template represents a starting point for creating new applications using TypeScript + Vue 3 + Vite + Express + Tailwindcss + Bulma.  
This MVP starter template should help get you started developing and verifing your ideas quickly.

**Important note: *Even though the template can be used as a starting point / reference for any production application, it is geared more towards testing / verifying your ideas without the hussle of starting the project from scratch and integrating the technology into this unusual stack. ***

The project *does NOT* have integrated database adapter. This is intentional, for a few reasons:
* Certain developers prefer *No SQL* over *SQL* solutions and vice versa,
* Developers use different vendors for their database solutions,
* Developers have opinions regarding database adapters / drivers,
* It requires *none* setup with Docker / database instance for connection,
* Everyone knows how to manipulate JavaScript Arrays / Objects to query the data,
* I find it appealing not to deal with SOLID principles when testing ideas I might scrape tomorrow. Save yourself some time and only improve upon things when you validate the idea first :) 

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project overview

The repository includes the following directory structure:
* Frontend / UI code is located in `src/client` directory,
* Backend / Server is located in `src/server` directory,
* Mock (file) database is located in `src/db` directory,
* Shared models / functionality is located in `src/common` directory.

There is **no** integrated database adapter / persistent layer in the project! If you missed why, please refer to the first few paragraphs of the [instructions](./README.md#mvp-starter-template).

The setup helps me validate my ideas quickly, without worring too much about design decissions / separation of concerns and persistent layer. The setup is very *flexible* and forigving.  
Note that with the great power comes great responsibility.

## Technology stack

The project uses a code stack that allows me to be fast when coding / prototyping with UI's and API part.   For these reasons I have chosen the following technology in order to validate ideas very quickly:
* [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language that builds on JavaScript,
* [Vue 3](https://vuejs.org/) - An approachable, performant and versatile framework for building web user interfaces,
* [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling,
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js,
* [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework,
* [Bulma](https://bulma.io/) - the modern CSS framework that just works,
* Other *tools* and *libraries* ([complete list](./package.json)).

## Project Setup

By cloning the repository locally and changing the remote:

```sh
$ git clone git@github.com:ognjenjevremovic/mvp-starter.git
$ cd ./mvp-starter
$ git remote remove origin
$ git remote add origin git@<version-control-host>:<your-username>/<your-project-name>.git
```

Or by simply creating a new project directly from the Github UI, using `Use this template` functionality.

### Start Development Server(s)

To run the Frontend / UI code:

```sh
$ npm run start:start:watch-client
```

To run the Backend / API code:

```sh
$ npm run start:start:watch-server
```

To run both commands in a single terminal session:

```sh
$ npm run start
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### License

MIT. See [LICENSE](./LICENSE) for details.