const fs = require('fs');
const zlib = require('zlib');
const gzip = require('gzip');
const outstream = fs.createWriteStream('output.jz.gz');

fs.createReadStream('./node-stream.js').pipe(gzip).pipe(outstream);


