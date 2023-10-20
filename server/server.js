import * as Path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

import express from 'express'
import hbs from 'express-handlebars'

import fs from 'node:fs/promises'

// read data.js file and return
const dataPath = Path.join(__dirname, './data/data.json')
export async function getData() {
  const data = await fs.readFile(dataPath, 'utf-8')
  const spinData = JSON.parse(data)
  const spinArray = spinData.spinData
  return spinArray
}

const server = express()

// Server configuration
const publicFolder = Path.resolve('public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', Path.resolve('server/views'))

// Your routes/router(s) should go here
server.get('/', async (req, res) => {
  const spinData = await getData()
  res.render('home', spinData)
})
// play page
server.get('/play', async (req, res) => {
  const spinArray = await getData()
  res.render('play', spinArray[0])
})

server.post('/play', async (req, res) => {
  const spinArray = await getData()
  const betValue = req.body
  const resultNumber = Math.floor(Math.random() * 9 + 1)
  console.log(betValue)
  console.log(resultNumber)
  if (Number(betValue.bet) == resultNumber) {
    console.log('You win $90')
  } else {
    console.log('You loose $90')
  }
})

export default server
