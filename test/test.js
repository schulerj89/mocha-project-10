//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const {server} = require('../server');
const expect = chai.expect;
const assert = require('assert');
const request = require('request');

chai.use(chaiHttp);

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
  });
});

 /*
  * Test the /GET route
  */
 describe('/GET main', () => {
  it('Main page content', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
      expect(body).to.equal('Hello');
      done();
    });
  });

  it('Main page status', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
  });
});

describe('/GET page content', () => {
  after(function (done) {
    server.close();
    done();
  });
  it('About page content', function(done) {
    request('http://localhost:3000/about' , function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
    });
  });
});
