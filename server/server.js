import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js'
import imageRouter from './routes/imageRoutes.js'


const PORT = process.env.PORT || 4000
const app = express()

// MiddleWares
app.use(express.json())
app.use(cors())

// DB connection
await connectDB()

// Routes
app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)
app.get('/',(req,res) => res.send('API is Working'))


app.listen(PORT, ()=>console.log("Server is running on PORT: "+PORT));

