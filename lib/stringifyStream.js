var util = require('util');
var Transform = require('stream').Transform;

function StringifyStream() {
    "use strict";
    if (!(this instanceof StringifyStream)) {
        return new StringifyStream;
    }
    Transform.call(this, {objectMode: true});
}

util.inherits(StringifyStream, Transform);

StringifyStream.prototype._transform = function(chunk, encoding, cb) {
    "use strict";
    try {
        this.push(JSON.stringify(chunk));
    } catch(err) {
        return cb(err);
    }
    cb();
};

module.exports = StringifyStream;