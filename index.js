const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://evoker:evoker@cluster0.qi4gf2f.mongodb.net/?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`server started. Port ${PORT}`))
    } catch (error) {
        console.log(e);
    }
}

start()