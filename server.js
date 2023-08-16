const express = require('express')

const app = express();
const port = 3000;


app.get('/greeting/', function(req, res){
    res.send('<h1>Hello Stranger</h1>')
})

app.get('/greeting/:name', function(req, res){
    res.send(`<h1>Hello, ${req.params.name} </h1>`)
})

app.listen(port, () => {
    console.log("listening on port", port)
})