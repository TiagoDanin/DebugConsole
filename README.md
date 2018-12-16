# DebugConsole
Use o "debug" via console.*

## Usage

- Set `DEBUG=console:*` or `DEBUG=console:KEY`

```javascript
require('debugconsole')
console.log("Hi!") //DEBUG=console:log
console.error("ERROR!") //DEBUG=console:error
```

## Installation

This is a [Node.js](https://nodejs.org/) module available through the
[npm registry](https://www.npmjs.com/). It can be installed using the
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
npm install debugconsole --save
```

## Dependencies

- [debug](https://ghub.io/debug): small debugging utility

## License

MIT
