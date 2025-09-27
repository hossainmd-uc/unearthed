import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'

import giftData from '../data/gifts.js'

import getGifts from '../controllers/gifts.js'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const giftsRouter = express.Router()

giftsRouter.get('/', getGifts)

giftsRouter.get("/:giftId", (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
})

export default giftsRouter