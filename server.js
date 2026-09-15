import express from 'express'
import { apiRouter } from './routes/apiRoutes.js'
import cors from 'cors'

const PORT = 8000

/*
Challenge:
1. Refactor the code to use express.Router()
*/
const app = express()

app.use(cors())

app.use(express.json())

app.use('/api',apiRouter)


/*
Challenge:
1. If a client uses an unknown route, serve this JSON 

{ message: "Endpoint not found. Please check the API documentation." }

Remember to serve an error code!
*/
app.use((req, res)=>{
res.status(404).json({ message: "Endpoint not found. Please check the API documentation." })
})

app.listen(PORT, () => console.log(`server connected on port ${PORT}`))
