var password = "password";
crypto = require ('crypto');
hash = crypto.createHash('md5').update(password).digest('hex');
console.log(hash);