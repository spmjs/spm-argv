'use strict';

var join = require('path').join;
var argv = require('..');
var fixtures = join(__dirname, 'fixtures');


describe('spm-argv', function() {

  it('normal', function() {
    var ret = argv(join(fixtures, 'normal'));
    ret.build.global.should.be.eql({react:'React'});
    ret.server.should.be.eql({devtool:'eval'});
    ret.build.uglify.should.be.eql({sourceMap:true});
  });

  it('no pkg', function() {
    var ret = argv(join(fixtures, 'no-package-json'));
    ret.registry.should.be.equal('http://spmjs.io');
  });

});
