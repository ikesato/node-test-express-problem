const request = require('supertest');
const mock = require('mock-fs');
const chai = require('chai');
const app = require('./app.js');
const expect = chai.expect;

describe('normal request', () => {
  it('respond with json', (done) => {
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('using mock-fs', () => {
  before(() => {
    mock({
      '/path/to/fake/dir/a.txt': "hello world"
    });
  });
  after(() => {
    mock.restore();
  });
  it('should success', (done) => {
    request(app)
      .get('/mock')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.eql("hello world");
        done();
      });
  });
});
