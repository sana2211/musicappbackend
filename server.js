require('dotenv').config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const express  = require('express');
const bodyParser = require('body-parser');
const server = express();
const userRouter = require('./users/userRoutes');
const bookmarkRouter = require('./bookmarks/bookmarkRoutes');
const cors = require('cors')
const knex = require('knex')
const db =knex({
    client: 'pg',
    connection:'postgres://mlyuurfwtyedfh:92ff09043eabd0824d9d8bb99946669f1cc83ad094704972dc51765c2700a9a3@ec2-52-44-139-108.compute-1.amazonaws.com:5432/de8fhncugherm3?ssl=true',
  });

server.use(bodyParser());
server.use(cors());
server.set('db', db);
server.use('/api/users', userRouter);
server.use('/api/bookmarks', bookmarkRouter);
/*server.get('/api/users', (req, res)=>{
    res.send({'users': ['JANE', 'Bob']})
})*/
server.listen(8000, ()=> console.log('server started'))