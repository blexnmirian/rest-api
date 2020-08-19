const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const Cors = require('cors');

//import routers
const postRoutes = require('./routes/postRoute');

dotenv.config({path: './config.env'});
//middleware
app.use(Cors())
app.use(bodyParser.json());



// connect to db
mongoose.connect(process.env.DATABASE_LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, ()=>{
  console.log(`Database Connected`)
})

app.use('/api', postRoutes);

app.listen(8000)