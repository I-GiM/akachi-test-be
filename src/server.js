import express from 'express'
import dotenv from 'dotenv'
import routes from './apis/routes'
import './config/db'

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json())
routes(app)

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})