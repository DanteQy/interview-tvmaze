Solution architectural decisions

- I decided to make start by using Vue 3 without Pinia(as proposed by the CLI) or any external library since it's part of the requirements
- being a webapp that doesn't make use of write operations(POST) or change of data I decided against using a state manager since it offers too many tools(against minimum solution requirements) like getters and setters that while may have become useful it would have brought too much complexity for a solution like this one
- I made instead use of Composables and the container pattern to create an environment of stateless logic and avoid having to create too many/big services to deal with api calls. There's some handling for errors or missing data when it comes to asynchronicity issues.
- I created component to be reusable and be used into views(reused the header)
- Thought about having a easy to navigate dashboard by looking at already existing examples like netflix and Amazon prime(as biggest references) so I Only added a small card that appears on focus when hovering as to give more information. In the search result instead is always visible since information can help make a different choice
- added the ypes.d.ts since the object returned by tvmaze holds always the same kinf of properties so having a defined type helps with control for errors and quality.
- made use of vue router to navigate the webapp(could have made some manual solution but would some instruments of vue available with routing made me choose otherwise). I chose to set the navigate on the id(a string instead of an object that couldn't be easily passed) rather than name(in the uri) since i wasn't too familiar with the tools and due to lack of time caused by some issues that were related to configuration rather than code. 
- the stylistic choices were made at the end since I was struggling to make use of some feature of Vue that I wasn't familiar with anymore.
- the search features show the view of the SearchResults component whenever there are results(if there aren;t it just goes back to the already cached previous component)

- With the time available i didn't manage to make working uni test with Jest since between the configuartion and learning how to use it with Vue I didn't manage to make use of it enough to have something that worked properly.

# abn-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit:dev # or `npm run test:unit` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
