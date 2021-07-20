require('dotenv').config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const express  = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRouter = require('./users/userRoutes');
const bookmarkRouter = require('./bookmarks/bookmarkRoutes');
const cors = require('cors')
const knex = require('knex')
const db =knex({
    client: 'pg',
    connection:'postgres://jmxcmokwvdfuqx:ce1f9e1c6a83cf12ac62dca421e27905a3f0c525a63061842aa7c71df702edd8@ec2-3-214-136-47.compute-1.amazonaws.com:5432/dh0tsqqm8f60e?ssl=true',
  });

  

app.use(bodyParser());
app.use(cors());
app.set('db', db);
app.use('/api/users', userRouter);
app.use('/api/bookmarks', bookmarkRouter);
/*app.get('/', (req, res)=>{
    res.status(200).send("Hello, World!")
})*/

module.exports = app