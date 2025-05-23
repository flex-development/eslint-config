# eslint-config

[![github release](https://img.shields.io/github/v/release/flex-development/eslint-config.svg?include_prereleases\&sort=semver)](https://github.com/flex-development/eslint-config/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/eslint-config.svg)](https://npmjs.com/package/@flex-development/eslint-config)
[![license](https://img.shields.io/github/license/flex-development/eslint-config.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits\&logoColor=ffffff)](https://conventionalcommits.org)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript\&logoColor=ffffff)](https://typescriptlang.org)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat\&logo=yarn\&logoColor=ffffff)](https://yarnpkg.com)

shareable eslint config.

## Contents

- [What is this?](#what-is-this)
- [Install](#install)
- [Use](#use)
- [Contribute](#contribute)

## What is this?

This package is a shareable [eslint][] configuration.

## Install

This package is [ESM only][esm].

In Node.js with [yarn][]:

```sh
yarn add -D @flex-development/eslint-config
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import fldvLint from 'https://esm.sh/@flex-development/eslint-config'
```

## Use

```js
import fldvLint from '@flex-development/eslint-config'

/**
 * eslint configuration.
 *
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...fldvLint.configs.node,
  {
    ignores: ['lib/**/*.d.mts']
  }
]

```

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

This project has a [code of conduct](./CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[eslint]: http://eslint.org

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[yarn]: https://yarnpkg.com
