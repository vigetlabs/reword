Reword
======

---

A tiny translator. The use case is simple: you have known and finite list of abbreviated/encoded strings and you need to map them to other (perhaps human-readable) strings.

#### A tiny example:

Import reword, give it a map of translations (values should be strings), and an optional `notFoundHandler` which will be called with the input string.

```js
import reword from 'reword'

const translations = {
  smt : 'something',
  nm  : 'not much',
  hru : 'how are you'
}

const notFoundHandler = (string) => {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(`No translation found for ${string}.`)
  }
  
  return string
}

const t = reword(translations, notFoundHandler)

t('smt')    // => 'something'
t('nm')     // => 'not much'
t('hru')    // => 'how are you'
t('uhhhh')  // => 'uhhh' (notFoundHandler invoked with 'uhhh')
```
