# dat-key-as [![Travis](https://img.shields.io/travis/joehand/dat-key-as.svg?style=flat-square)](https://travis-ci.org/joehand/dat-key-as) [![npm](https://img.shields.io/npm/v/dat-key-as.svg?style=flat-square)](https://npmjs.org/package/dat-key-as)

Get a dat key as a string or buffer.

* **valid string/buffer**: Returns a dat key as a string/buffer
* **invalid key**: Throws error
* **null**: Returns null

Checks if keys are valid via [dat-encoding](https://github.com/juliangruber/dat-encoding). Uses [dat-string-key](https://github.com/joehand/dat-string-key) and [dat-buffer-key](https://github.com/joehand/dat-buffer-key) to get the key as the right type.

## API

Get your key as a string or buffer. Throws error if the key is not valid.

```js
var datKeyAs = require('dat-key-as')

datKeyAs.string(key) // get a key as a string
datKeyAs.buffer(key) // get a key as a buffer

datKeyAs.str(key) // get a key as a string
datKeyAs.buf(key) // get a key as a buffer
```

## License

MIT
