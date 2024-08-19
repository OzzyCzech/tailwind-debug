const plugin = require('tailwindcss/plugin')

module.exports = plugin(({addComponents}) => {
	addComponents({
		'.debug': {
			outline: 'dashed thin red',
		},
		'.debug-red': {
			outline: 'dashed thin red',
		},
		'.debug-green': {
			outline: 'dashed thin green',
		},
		'.debug-blue': {
			outline: 'dashed thin blue',
		},
		'.debug-yellow': {
			outline: 'dashed thin yellow',
		},
	})
});