require('dotenv').config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const HOST = 'ec2-52-44-139-108.compute-1.amazonaws.com'
const DB = 'de8fhncugherm3';
const USER = 'mlyuurfwtyedfh';
const PASSWORD = '92ff09043eabd0824d9d8bb99946669f1cc83ad094704972dc51765c2700a9a3';

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: HOST,
      database: DB,
      user:     USER,
      password: PASSWORD,
      ssl: true
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: DB,
      user:     USER,
      password: PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: DB,
      user:     USER,
      password: PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
