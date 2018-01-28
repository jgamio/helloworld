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

    describe('GET /hello', function() {
        it("renders successfully", function(done) {
            request(app).get('/')
              .expect(200)
              .expect(/hello/, done);    
          })
    });    
    describe('GET /hello?uppercase=true', function() {
        it("renders successfully", function(done) {
            request(app).get('/?uppercase=true')
              .expect(200)
              .expect(/HELLO/, done);    
          })
    }); 
    describe('GET /hello?reversed=true', function() {
        it("renders successfully", function(done) {
            request(app).get('/?reversed=true')
              .expect(200)
              .expect(/olleh/, done);    
          })
    });      
    
    describe('GET /hello?reversed=true&uppercase=true', function() {
        it("renders successfully", function(done) {
            request(app).get('/?reversed=true&uppercase=true')
              .expect(200)
              .expect(/OLLEH/, done);    
          })
    }); 


    describe('GET /world', function() {
        it("renders successfully", function(done) {
            request(app).get('/')
              .expect(200)
              .expect(/world/, done);    
          })
    });    
    describe('GET /world?uppercase=true', function() {
        it("renders successfully", function(done) {
            request(app).get('/?uppercase=true')
              .expect(200)
              .expect(/WORLD/, done);    
          })
    }); 
    describe('GET /world?reversed=true', function() {
        it("renders successfully", function(done) {
            request(app).get('/?reversed=true')
              .expect(200)
              .expect(/dlrow/, done);    
          })
    });      
    
    describe('GET /world?reversed=true&uppercase=true', function() {
        it("renders successfully", function(done) {
            request(app).get('/?reversed=true&uppercase=true')
              .expect(200)
              .expect(/DLROW/, done);    
          })
    });  

});
