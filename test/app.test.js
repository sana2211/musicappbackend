const { expect } = require('chai');
const server = require( '../app' );

describe( 'App', () => {
  it( 'GET / responds with 200 containing "Hello, world!"', () => {
    return supertest( server )
      .get( '/' )
      .expect( 200, 'Hello, World!' );
  } );

  it( 'GET / responds with 200 containing users list', () => {
    return supertest( server )
      .get( '/api/users' )
      .expect(res=>{
        expect(200, res.body.length).to.greaterThan(1)
        expect(typeof(res.body)).to.eql('object')
      })
  } );

});