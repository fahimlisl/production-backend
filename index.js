require('dotenv').config()
const express = require('express')

const app = express()

// const port = 4000

app.get('/',(req,res) => {
    res.send('this is not a hello !! bor finally we made our backend-file in production')
})

app.listen(process.env.PORT,() => {
    console.log(`example app is listening on port ${process.env.PORT}`);
    
})