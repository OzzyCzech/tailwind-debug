[![NPM Downloads](https://img.shields.io/npm/dm/tailwind-debug?style=for-the-badge)](https://www.npmjs.com/package/tailwind-debug)
[![NPM Version](https://img.shields.io/npm/v/tailwind-debug?style=for-the-badge)](https://www.npmjs.com/package/tailwind-debug)
[![NPM License](https://img.shields.io/npm/l/tailwind-debug?style=for-the-badge)](https://github.com/OzzyCzech/tailwind-debug/blob/main/LICENSE)
![npm bundle size](https://img.shields.io/bundlephobia/min/tailwind-debug?style=for-the-badge)
[![Last Commit](https://img.shields.io/github/last-commit/OzzyCzech/tailwind-debug?style=for-the-badge)](https://github.com/OzzyCzech/tailwind-debug/commit/main)

# Tailwind Debug Plugin

The **Tailwind Debug Plugin** helps web developers quickly highlight any HTML element with a `red dashed outline` for
debugging purposes.

![What's about?](tailwind-debug.png)

## How to Add and Use the Tailwind Debug Plugin

### **Step 1: Install the Plugin**

```shell
yarn add tailwind-debug
```

```shell
npm i tailwind-debug
```

Add the `tailwind-debug` plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('tailwind-debug'),
  ],
}
```

### Step 2: Apply Debug Classes

To debug an HTML element, add the `debug` class:

```html
<div class="debug"></div>
```

For debugging child elements, use the `*:debug` class:

```html
<ul class="*:debug">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Step 3: Choose Debug Colors

There are multiple color options available for debugging. Apply them by using the corresponding class:

```html
<div class="debug-red"></div>
<div class="debug-green"></div>
<div class="debug-blue"></div>
<div class="debug-yellow"></div>
```

## License

[MIT](/LICENSE)
