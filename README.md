Global variables manager

## Install

5no-global requires Node version 8 or above.

```sh
npm install --save 5no-global
```

## Doc

Global object has methods

```js

Global(namespace).set(name, data)
Global(namespace).get(name, defaultValue)
Global(namespace).getAll()
   
```

## Examples

```js
const Global = require('5no-global')

Global('5no').set('test', 100)

console.log(Global('5no').get('test'))   
```

## License

MIT Licensed, Copyright (c) 2018 Aleksandr Sokol