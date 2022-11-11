const express = require('express')
const app = express()
const PORT = process.env.PORT || 2020
const { Router } = require('express')
const expressRouter = Router()

app.use(express.static('public'))

expressRouter.get('/', (req, res)=>{
    res.sendFile(__dirname+'/public/index.html')
})


const server = app.listen(PORT, (req, res) =>{
    console.log(`Servidor escuchando en el puerto : ${server.address().port}`);
})

app.use('/inicio', expressRouter)