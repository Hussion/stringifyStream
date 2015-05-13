// require('mocha');
var StringifyStream = require('../lib/stringifyStream');
var should = require('should');
var Readable = require('stream').Readable;
var rs = Readable({objectMode: true});

describe('test/test_json.js', function () {
  it('should print stringfiy strings', function () {
    var jsonobj = {age: 23, addr: 'china'};
    rs.push(jsonobj);
    rs.push(null);
    rs.pipe(StringifyStream()).pipe(process.stdout);
  });
});

