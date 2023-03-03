import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express()

app.use(bodyParser.json({limit:"30mb", extened:true}))
app.use(bodyParser.urlencoded({limit:"30mb", extened:true}))
app.use(cors())

app.use('/posts', postRoutes)
app.use('/', (req, res)=>{
    res.send('Hooo Hooo!')
})

const PORT = process.env.PORT || 5000;

const connectDB = async function(){
    try {
        await mongoose.connect(process.env.CONNECTION_URL)
    } catch (error) {
        console.log(error);
    }
}


connectDB()
mongoose.connection.once('open', function(){
    console.log('Connected to MongoDB')
    app.listen(PORT, ()=> console.log(`Server started and running on port: ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
})


