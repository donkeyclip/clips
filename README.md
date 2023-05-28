# Donkeyclips clip monorepo

## A monorepo that holds all of donkeyclip's clips

## Development

1. pnpm i
2. pnpm start --filter=<clips-name-in-package-json/or-path-to-folder>...

## Creating a new clip

1. copy the folder `clips/landing-page-v2`
2. paste that folder in `clips/<a-name-for-your-clip>`
3. update the name of the clip inside `clips/<a-name-for-your-clip>/package.json`
4. update the id of your clip in `clips/<a-name-for-your-clip>/server/id.js`
5. run `pnpm i`
