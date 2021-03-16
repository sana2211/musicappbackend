require('dotenv').config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const express  = require('express');
const bodyParser = require('body-parser');
const server = express();
const userRouter = require('./users/userRoutes');
const cors = require('cors')
const knex = require('knex')
const db =knex({
    client: 'pg',
    connection:'postgresql://postgres@localhost/musicdb',
  });

server.use(bodyParser());
server.use(cors());
server.set('db', db);
server.use('/api/users', userRouter);
/*server.get('/api/users', (req, res)=>{
    res.send({'users': ['JANE', 'Bob']})
})*/
server.listen(8000, ()=> console.log('server started'))