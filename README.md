Reword
======

---

[![Circle CI](https://circleci.com/gh/vigetlabs/reword.svg?style=svg&circle-token=99cae8a958a0ac25b1a0e01ba564ee0838ce1bbc)](https://circleci.com/gh/vigetlabs/reword)

A tiny translator. The use case is simple: you have known and finite list of abbreviated/encoded strings and you need to map them to other (perhaps human-readable) strings.

Supports nested translations and a few different syntax variations for retrieving entries.

The signatures are as follows:

## t(String, ..)

If _exactly one_ string argument is provided, Reword will look in the translations for a property with that name and return it's value.

If _more than one_ string argument is provided, Reword will look up each independently and return an array of the results.

## t(Array<String>)

If an array of strings is provided, Reword will treat this as a **nested** lookup.

## t(String special)

If a string is provided and it has `.` (periods) anywhere inside that string, Reword will treat this as a **nested** lookup, splitting the string on the `.` character.

#### A tiny example:

Import reword, give it a map of translations, and an optional `notFoundHandler` which will be called with the input string.

```js
import reword from 'reword'

const translations = {
  smt : 'something',
  nm  : 'not much',
  hru : 'how are you',

  colors: {
    blue  : '#00f',
    red   : '#f00',
    green : '#0f0'
  }
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
t('uhhhh')  // => 'uhhhh' (notFoundHandler invoked with 'uhhh')

t(['colors', 'blue']) // => '#00f'
t('colors.red')       // => '#f00'
```


***

<a href="http://code.viget.com">
  <img src="http://code.viget.com/github-banner.png" alt="Code At Viget">
</a>

Visit [code.viget.com](http://code.viget.com) to see more projects from [Viget.](https://viget.com)
