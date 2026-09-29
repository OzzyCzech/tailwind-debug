const {test} = require('node:test')
const assert = require('node:assert/strict')
const {readFile} = require('node:fs/promises')
const {compile} = require('tailwindcss')

async function build(candidates) {
	const compiler = await compile('@import "tailwindcss/utilities"; @plugin "tailwind-debug";', {
		base: __dirname,
		loadModule: async () => ({module: require('./index.js'), base: __dirname}),
		loadStylesheet: async () => ({
			content: '@tailwind utilities;',
			base: __dirname,
		}),
	})
	return compiler.build(candidates)
}

test('generates debug classes', async () => {
	const css = await build(['debug', 'debug-red', 'debug-green', 'debug-blue', 'debug-yellow'])
	assert.match(css, /\.debug \{\s*outline: dashed thin red;/)
	for (const color of ['red', 'green', 'blue', 'yellow']) {
		assert.match(css, new RegExp(`\\.debug-${color} \\{\\s*outline: dashed thin ${color};`))
	}
})

test('supports child variant', async () => {
	const css = await build(['*:debug'])
	assert.match(css, /\.\\\*\\:debug/)
	assert.match(css, /outline: dashed thin red;/)
})
