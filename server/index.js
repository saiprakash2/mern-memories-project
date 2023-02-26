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

// CONNECTION_URL = 'localhost:27017'

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log('Server running on port: 5000'))

// mongoose.connect(CONNECTION_URL, {userNewUrlParser: true, userUnifiedTopology: true})
//     .then(()=> app.listen(PORT, ()=> console.log('Server running on port: 5000')))
//     .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false)