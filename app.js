require('dotenv').config()
const express = require('express')
// import express from "express"

const app = express()
const port = 4000

const data = {
    "name":"John", 
    "age":30, 
    "car":null
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) =>{
    res.send('sarang2209')
})

app.get('/info', (req, res) => {
    res.json(data)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
}) 