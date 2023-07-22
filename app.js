const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;



// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático (Middleware)
app.use( express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Angel Ivan',
        titulo: 'Curso de node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Angel Ivan',
        titulo: 'Curso de node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Angel Ivan',
        titulo: 'Curso de node'
    });
})







// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html')
// })

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html')
// })

// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/public/404.html')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})