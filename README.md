# Filament packages version: [2.1.0](https://filament-react.internal.philips/dls4/?path=/docs/release-notes-v2-2-1-0--docs)

## Examples for integrating [Filament React](https://filament-react.internal.philips) into React app:

For Single Page Applications (SPA) we recommend:

- ✅ Vite: [examples/vite](./examples/vite/)

For Multi Page Applications (MPA) with SSR and SSG we recommend:

- ✅ NEXT.js: [examples/nextjs](./examples/nextjs/)

Other setups:

- ❌ Remix: [examples/remix](./examples/remix/) (not working with the latest Remix version, we are investigating the issue 🔍)
- ✅ Webpack (standalone): [examples/webpack](./examples/webpack/)
- ✅ Vite (React 17): [examples/vite-react-17](./examples/vite-react-17/)

[Depreacted:](https://github.com/reactjs/react.dev/pull/5487#issuecomment-1409720741)

- ✅ Create React App: [examples/create-react-app](./examples/create-react-app/) (unit tests execution is not working, we are investigating the issue 🔍)

## Vanilla-extract

Filament React internally uses [vanilla-extract](https://vanilla-extract.style/) for the styling.
That's why your React app needs [vanilla-extract plugin](https://vanilla-extract.style/documentation/getting-started#bundler-integration) to compile (build-time) the theme styling to css files.
You can also use vanilla-extract for your app styling or you can use whatever you think best suits for your case.

## NPM registry

Filament React packages can be installed with npm / yarn from Artifactory.

For that reason you need in your .npmrc / .yarnrc / .yarnrc.yml file registry set to:

https://artifactory-ehv.ta.philips.com/artifactory/api/npm/dl-common-npm

or proxy link:

https://registry-reflector.eu1.phsdp.com

```
//.npmrc
registry=https://artifactory-ehv.ta.philips.com/artifactory/api/npm/dl-common-npm
```

```
//.yarnrc (Yarn 1)
registry "https://artifactory-ehv.ta.philips.com/artifactory/api/npm/dl-common-npm"
```

```
//.yarnrc.yml (Yarn 2+)
npmRegistryServer: "https://artifactory-ehv.ta.philips.com/artifactory/api/npm/dl-common-npm"
```
