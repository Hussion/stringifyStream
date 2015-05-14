# stringifyStream  

[![Join the chat at https://gitter.im/hussion/stringifyStream](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/hussion/stringifyStream?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
![Build Status](https://travis-ci.org/hussion/stringifyStream.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/hussion/stringifyStream/badge.svg?branch=master)](https://coveralls.io/r/hussion/stringifyStream?branch=master)
[![Dependency Status](https://gemnasium.com/hussion/stringifyStream.svg)](https://gemnasium.com/hussion/stringifyStream)
[![npm version](https://badge.fury.io/js/stringifystream.svg)](http://badge.fury.io/js/stringifystream)
### 
A Node.js JSON Stringify Transform Stream module.

# Install

```bash
npm install stringifystream
```

# Usage

```js
var StringifyStream = require('stringifystream');
var Readable = require('stream').Readable;
var rs = Readable({objectMode: true});
rs.push({age: 23, address: 'china'});
rs.push(null);

rs.pipe(StringifyStream()).pipe(process.stdout);
```  

## License 

(The MIT License)

Copyright (c) 2015 hussion &lt;hussion@icloud.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
