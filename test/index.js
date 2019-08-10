'use strict'

const test = require('ava')

const isCdnUrl = require('..')

test('true', async t => {
  t.true(isCdnUrl('//cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js'))
})

test('false', async t => {
  t.false(isCdnUrl('kikobeats.com'))
  t.false(isCdnUrl('http://kikobeats.com'))
  t.false(isCdnUrl('https://kikobeats.com'))
  t.false(isCdnUrl('mailto:someone@yoursite.com'))
})
