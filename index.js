const plugin = require('tailwindcss/plugin')

module.exports = plugin(({addComponents}) => {
  addComponents({
    '.debug': {
      outline: '1px dashed red',
    },
  })
});