const debug = require('debug')
Object.keys(console).forEach((name) => {
	return console[name] = debug(`console:${name}`)
})
