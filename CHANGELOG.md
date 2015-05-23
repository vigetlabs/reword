# Changelog

### 0.1.2

Adds the ability to handle nested translations with a few different syntax variations. Translations can be looked up in multiples: `t('foo', 'bar')`, or nested properties: `t(['baz', 'qux']) === t('baz.qux')`

### 0.1.1

Removed ES6 Module code (`import`, `export default`) in favor of `require` and `module.exports`.

### 0.1.0

Basic translator. Not sure if translations map should mandate string values.
