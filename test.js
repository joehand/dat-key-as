var test = require('tape')
var encoding = require('dat-encoding')

var datKeyAs = require('.')

var keys = [
  {type: 'valid', key: 'a6848dd4f5515f70b4c20c484d7b348ce71f711d8f94b07d919f0acc068d165d'},
  {type: 'valid', key: new Buffer('a6848dd4f5515f70b4c20c484d7b348ce71f711d8f94b07d919f0acc068d165d', 'hex')},
  {type: 'valid', key: 'dat://a6848dd4f5515f70b4c20c484d7b348ce71f711d8f94b07d919f0acc068d165d'},
  {type: 'valid', key: 'dat.land/a6848dd4f5515f70b4c20c484d7b348ce71f711d8f94b07d919f0acc068d165d'},
  {type: 'invalid', key: new Buffer('key-me-maybe', 'hex')},
  {type: 'invalid', key: 'key-me-maybe'},
  {type: 'null', key: null}
]

test('keys maybe turn into strings', function (t) {
  keys.forEach(function (key) {
    if (key.type === 'invalid') {
      t.throws(function () { datKeyAs.string(key.key) }, 'invalid key throws error')
    } else if (key.type === 'valid') {
      t.ok(encoding.decode(datKeyAs.str(key.key)), 'valid key is now valid str')
    } else {
      t.equal(datKeyAs.str(key.key), null, 'null key is still null')
    }
  })
  t.end()
})

test('keys maybe turn into buffers', function (t) {
  keys.forEach(function (key) {
    if (key.type === 'invalid') {
      t.throws(function () { datKeyAs.buffer(key.key) }, 'invalid key throws error')
    } else if (key.type === 'valid') {
      t.ok(encoding.encode(datKeyAs.buf(key.key)), 'valid key is now valid buf')
    } else {
      t.equal(datKeyAs.buf(key.key), null, 'null key is still null')
    }
  })
  t.end()
})
