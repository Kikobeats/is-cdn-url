# is-cdn-url

![Last version](https://img.shields.io/github/tag/Kikobeats/is-cdn-url.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/com/Kikobeats/is-cdn-url/master.svg?style=flat-square)](https://travis-ci.com/Kikobeats/is-cdn-url)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/is-cdn-url.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/is-cdn-url)
[![NPM Status](https://img.shields.io/npm/dm/is-cdn-url.svg?style=flat-square)](https://www.npmjs.org/package/is-cdn-url)

> Check if an URL is from CDN.

## Install

```bash
$ npm install is-cdn-url --save
```

## Usage

```js
const isCdnUrl = require('is-cdn-url')

isCdnUrl('//cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js')
// => true

isCdnUrl('https://kikobeats.com')
// => false
```

## License

**is-cdn-url** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/is-cdn-url/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/is-cdn-url/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
