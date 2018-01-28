var request = require('supertest')
, express = require('express');

var app = require('../app');

describe('Testing Hello World API', function() {

    describe('GET /', function() {
        it("renders successfully", function(done) {
            request(app).get('/')
              .expect(200)
              .expect(/hello world/, done);    
          })
    });    
    describe('GET /?uppercase=true', function() {
        it("renders successfully", function(done) {
            request(app).get('/?uppercase=true')
              .expect(200)
              .expect(/HELLO WORLD/, done);    
          })
    }); 
    describe('GET /?reversed=true', function() {
        it("renders successfully", function(done) {
            request(app).get('/?reversed=true')
              .expect(200)
              .expect(/dlrow olleh/, done);    
          })
    });      
    
    describe('GET /?reversed=true&uppercase=true', function() {
        it("renders successfully", function(done) {
            request(app).get('/?reversed=true&uppercase=true')
              .expect(200)
              .expect(/DLROW OLLEH/, done);    
          })
    });      

});
