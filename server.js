const express = require('express')
const expressEjsLayouts = require('express-ejs-layouts')

const app = express()


const path = require('path')
const PORT = process.env.PORT  || 5500



// set template engine
app.use(expressEjsLayouts)
app.set('views' , path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')


app.use(express.static('public'))
app.get('/', (req , res) =>{
    res.render('home')
})
app.get('/cart', (req , res) => {
    res.render('customers/cart')

 })

 app.get('/login', (req , res) => {
    res.render('auth/login')

 })

 app.get('/register', (req , res) => {
    res.render('auth/register')

 })


app.listen(PORT, () =>
{
    
    console.log('listen on port 5500')

})