import utils from './utils';

var assert = require('assert');
var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

describe('Test utils value', function() {
  describe('#empty() ', function() {
    it('sould return true when object is undefined', function() {
        let obj;
        assert.equal(utils.empty(obj), true);
    });

    it('sould return true when object is empty string', function() {
        let obj = '';
        assert.equal(utils.empty(obj), true);
    });

    it('sould return true when object is 0', function() {
        let obj = 0;
        assert.equal(utils.empty(obj), true);
    });

    it('sould return true when object is false', function() {
        let obj = false;
        assert.equal(utils.empty(obj), true);
    });

    it('sould catch exception when path is not string', function() {
        let obj = {};
        let path = 0;
        assert.throws(function(){utils.empty(obj,path)}, Error, "Path is not a string");
    });

    it('sould return  true when path is empty string', function() {
        let obj = {};
        let path = "";
        assert.equal(utils.empty(obj,path), true);
    });

    it('sould return true when path is wrong', function() {
        let obj = {};
        let path = "sdf";
        assert.equal(utils.empty(obj,path), true);
    });

    it('sould return false if obj is not empty', function() {
        let obj = {
            a:0
        };        
        assert.equal(utils.empty(obj), false);
    });

    it('sould return true when obj has one depth field with empty value', function() {
        let obj = {
            a:0
        };        
        let path = 'a';
        assert.equal(utils.empty(obj,path), true);
    });

    it('sould return false when obj has one depth field with not empty value', function() {
        let obj = {
            a:1
        };        
        let path = 'a';
        assert.equal(utils.empty(obj,path), false);
    });


    it('sould return true when obj has 2 depth and field is empty', function() {
        let obj = {
            a: { 
                b:0
            }
        };        
        let path = 'a.b';
        assert.equal(utils.empty(obj,path), true);
    });

    it('sould return false when obj has 2 depth and field is not empty', function() {
        let obj = {
            a: { 
                b:1
            }
        };        
        let path = 'a.b';
        assert.equal(utils.empty(obj,path), false);
    });

    it('sould return true when obj has 3 depth and field is not empty', function() {
        let obj = {
            a: { 
                b: {
                    c: ""
                }
            }
        };        
        let path = 'a.b.c';
        assert.equal(utils.empty(obj,path), true);
    });

    it('sould return false when obj has 3 depth and field is not empty', function() {
        let obj = {
            a: { 
                b: {
                    c: {}
                }
            }
        };        
        let path = 'a.b.c';
        assert.equal(utils.empty(obj,path), false);
    });

  });
});
