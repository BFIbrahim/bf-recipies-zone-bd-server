const express = require('express')
const cors = require("cors")

const app = express();
app.use(cors())
const allChef = require("./data.json")

app.get('/', (req, res) =>{
    res.json({message:'Hello server running'})
})

app.get('/alldata', (req, res) => {
    res.send(allChef)
})

app.listen(3400, () => {
    console.log('server Is running port 3400')
})