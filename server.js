const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressEjsLayouts = require('express-ejs-layouts')
const PORT = 3300
 
// const mongoose = require('mongoose');

// //database connection

// const url = 'mongodb://cluster0.dgvbxqp.mongodb.net/pizza';
// // cluster0.dgvbxqp.mongodb.net/pizza
// mongoose.connect(url, {useNewUrlParser: true , useCreateIndex: true , useUnifiedTopology: true , useFindAndModify:true});

// const connection = mongoose.connection;
// connection.once('open' , () => {
//     console.log('Database connected....')

// })



const mongoose = require('mongoose');
// Connecting to database
mongoose.connect("mongodb://cluster0.dgvbxqp.mongodb.net",
  {
      dbName: "pizza",
      useNewUrlParser: true,
      useUnifiedTopology: true,
  }
  );
 
  
  console.log("App listen at port 5500");
  


  
//assets
app.use(express.static('public'))

// set template engine
app.use(expressEjsLayouts)
app.set('views' , path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

require('./routes/web.js')(app)

app.listen(PORT, () =>
{
    
    // console.log('listen on port 5500')

})