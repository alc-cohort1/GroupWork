var name = "alican";
crypto = require('crypto');
hash = crypto.createHash('md5').update(name).digest('hex');
console.log(hash);