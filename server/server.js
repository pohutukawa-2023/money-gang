import * as Path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

import express from 'express'
import hbs from 'express-handlebars'
import puppyRouter from './routes.js'
import fs from 'node:fs/promises'

const dataPath = Path.join(__dirname, './data/data.json')

export async function getData() {
  const data = await fs.readFile(dataPath, 'utf-8')
  const  spinData= JSON.parse(data)
  return spinData
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
server.get('/', async (req, res) =>{
  const spinData = await getData()
  res.render('home', spinData)
})


export default server



