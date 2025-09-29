import express from 'express'
import path from "node:path"
import { fileURLToPath } from "url"
import dotenv from "dotenv"

dotenv.config()

import usersRouter from './routes/users.js'

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set("views", path.join(__dirname, "views"))
app.set('view engine', 'ejs')

app.use('/', usersRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})