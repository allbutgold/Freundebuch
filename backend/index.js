import express from 'express'
import cors from 'cors'
import './util/config.js'
import { makeFriends } from './util/makeFriends.js'
import { getFriends } from './util/getFriends.js'

const app = express()
const PORT = process.env.PORT || 7777

app.use(cors({
  origin: "*"
}))
app.use(express.json())

app.post('/api/v1/makeFriends', makeFriends)

app.get('/api/v1/getFriends', getFriends)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))