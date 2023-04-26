const express = require('express')

const app = express()


const path = require('path')
const PORT = process.env.PORT  || 5500

app.get('/', (req , res) =>{
    res.render('home')
})
// set template engine
app.set('views' , path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')
app.listen(PORT, () =>
{
    
    console.log('listen on port 5500')

})