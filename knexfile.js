require('dotenv').config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const HOST = 'ec2-3-214-136-47.compute-1.amazonaws.com'
const DB = 'dh0tsqqm8f60e';
const USER = 'jmxcmokwvdfuqx';
const PASSWORD = 'ce1f9e1c6a83cf12ac62dca421e27905a3f0c525a63061842aa7c71df702edd8';

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
