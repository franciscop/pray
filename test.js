// Required
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

// Library to test
var pray = require('./pray');

describe("It works", function(){
  it("Works if equal", function(){
    pray('a', 'b', 'c')('a', 'b', 'c');
  });

  it("Works if different", function(){
    expect(function(){
      pray('a', 'b', 'c')('a', 'b', 'd');
    }).to.throw();
  });

  it("Works with callback", function(){
    pray('a', 'b', function(actual){
      expect(actual).to.equal('c');
    })('a', 'b', 'c');
  });

  it("Calls done if passed", function(done){
    pray('a', 'b', 'c', done)('a', 'b', 'c');
  });

  it("Can test for only some arguments", function(){
    pray('a')('a', 'b', 'c');
  });
});
