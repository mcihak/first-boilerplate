# Fist Boilerplate

Based on [HackerNews clone](https://github.com/vuejs/vue-hackernews-2.0)

## Features

> Note: in practice, it is unnecessary to code-split for an app of this size (where each async chunk is only a few kilobytes), nor is it optimal to extract an extra CSS file (which is only 1kb) -- they are used simply because this is a demo app showcasing all the supported features.

- Server Side Rendering
  - Vue + vue-router + vuex working together
  - Server-side data pre-fetching
  - Client-side state & DOM hydration
  - Automatically inlines CSS used by rendered components only
  - Preload / prefetch resource hints
  - Route-level code splitting
- Progressive Web App
  - App manifest
  - Service worker
  - 100/100 Lighthouse score
- Single-file Vue Components
  - Hot-reload in development
  - CSS extraction for production
- Animation
  - Effects when switching route views
  - Real-time updates with FLIP Animation

## A Note on Performance

This is a demo primarily aimed at explaining how to build a server-side rendered Vue app, as a companion to our SSR documentation. There are a few things we probably won't do in production if we were optimizing for performance, for example:

- This demo uses [Axios HTTP client](https://github.com/axios/axios) for API requests and [JSON Server](https://github.com/typicode/json-server) as a fake API with mocked data.

- In practice, it is unnecessary to code-split for an app of this size (where each async chunk is only a few kilobytes so the extra request isn't really worth it), nor is it optimal to extract an extra CSS file (which is only 1kb).

It is therefore not recommended to use this app as a reference for Vue SSR performance - instead, do your own benchmarking, and make sure to measure and optimize based on your actual app constraints.

**A detailed Vue SSR guide can be found [here](https://ssr.vuejs.org).**

## Build Setup

**Requires Node.js 7+**

``` bash
# install dependencies
npm install # or yarn

# start JSON server (fake API with mocked data)
npm run json

# serve in dev mode, with hot reload at localhost:8080
npm run dev

# build for production
npm run build

# serve in production mode
npm start
```

## License

MIT
