'use strict'

const { createServer, proxy } = require('aws-serverless-express')
// const { DynamoDBClient, ScanCommand } = require('@aws-sdk/client-dynamodb')
// const { unmarshall } = require("@aws-sdk/util-dynamodb")
const express = require('express')
const { Nuxt } = require('nuxt-start')
const config = require('./nuxt.config.js')

// const dbclient = new DynamoDBClient({})
// const CACHE = {
//   aboutCards: [],
//   workCards: []
// }
const app = express()
const nuxt = new Nuxt({
  ...config,
  dev: false,
  _start: true,
})

// app.use(async (req, res, next) => {
//   try {
//     if (CACHE.aboutCards.length === 0 || CACHE.workCards.length === 0) {
//       const aboutParams = {
//         TableName: 'AboutCardTable'
//       }
//       const aboutResults = await dbclient.send(new ScanCommand(aboutParams));
//       CACHE.aboutCards = aboutResults.Items.map(card => unmarshall(card))
//
//       const workParams = {
//         TableName: 'WorkCardTable'
//       }
//       const workResults = await dbclient.send(new ScanCommand(workParams));
//       CACHE.workCards = workResults.Items.map(card => unmarshall(card))
//     }
//     console.log(CACHE.aboutCards)
//
//     res.locals.aboutCards = CACHE.aboutCards
//     res.locals.workCards = CACHE.workCards
//     next()
//   } catch (err) {
//     console.error(err)
//     next()
//   }
// })
app.use(async (req, res) => {
  if (nuxt.ready) {
    await nuxt.ready()
  }
  nuxt.render(req, res)
})
const server = createServer(app, void 0, [
  'application/javascript',
  'application/json',
  'application/manifest+json',
  'application/octet-stream',
  'application/xml',
  'font/eot',
  'font/opentype',
  'font/otf',
  'image/gif',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'image/x-icon', // for favicon
  'text/comma-separated-values',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml',
  'application/rss+xml',
  'application/atom+xml',
])

module.exports.handler = (event, ctx) => {
  proxy(server, event, ctx)
}
