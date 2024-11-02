const express = require('express')
const hbs = require('hbs')
require('dotenv').config();

const app= express()
const port=  process.env.PORT 

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname +'/views/partials')



app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.render('home', {
        nombre: 'YOSHUA DE LEON',
        titulo: 'perros'
    })
})

app.get('/home', (req,res)=>{
    res.render('home', {
        nombre: 'YOSHUA DE LEON',
        titulo: 'perros'
    })
})

app.get('/pastor', (req,res)=>{
    res.render('pastor', {
        nombre: 'YOSHUA DE LEON',
        titulo: 'perros'
    })
})

app.get('/golden', (req,res)=>{
    res.render('golden', {
        nombre: 'YOSHUA DE LEON',
        titulo: 'perros'
    })
})
app.get('/pequines', (req,res)=>{
    res.render('pequines', {
        nombre: 'YOSHUA DE LEON',
        titulo: 'perros'
    })
})



app.get('*',(req,res)=>{
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})