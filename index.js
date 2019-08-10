'use strict'

const URL_CDN_REGEX = /^\/\//

module.exports = (url = '') => URL_CDN_REGEX.test(url)
