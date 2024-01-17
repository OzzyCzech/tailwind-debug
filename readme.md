[![NPM Downloads](https://img.shields.io/npm/dm/tailwind-debug?style=for-the-badge)](https://www.npmjs.com/package/tailwind-debug)
[![NPM Version](https://img.shields.io/npm/v/tailwind-debug?style=for-the-badge)](https://www.npmjs.com/package/tailwind-debug)
[![NPM License](https://img.shields.io/npm/l/tailwind-debug?style=for-the-badge)](https://github.com/OzzyCzech/tailwind-debug/blob/main/LICENSE)
![npm bundle size](https://img.shields.io/bundlephobia/min/tailwind-debug?style=for-the-badge)
[![Last Commit](https://img.shields.io/github/last-commit/OzzyCzech/tailwind-debug?style=for-the-badge)](https://github.com/OzzyCzech/tailwind-debug/commit/main)

# Tailwind debug plugin

The Tailwind debug plugin is a helpful utility for web developers. This plugin allows users to quickly and easily add a red dashed outline over any HTML element.

![What's about?](tailwind-debug.png)

## Installation

```bash
yarn add tailwind-debug
```

or

```bash
npm i tailwind-debug
```

## Usage

```js
// tailwind.config.js
module.exports = {
	plugins: [
		require('tailwind-debug'),
	],
}
```

then

```html

<div class="debug"></div>
```