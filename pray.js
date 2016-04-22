// Required
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

// Hope for a certain answer
module.exports = function(){
  var expected = [].slice.call(arguments, 0);
  return function(){
    var actual = arguments;
    expected.forEach(function(exp, i){
      if (exp instanceof Function) {
        exp(actual[i]);
      } else {
        expect(exp).to.deep.equal(actual[i]);
      }
    });
  };
};
