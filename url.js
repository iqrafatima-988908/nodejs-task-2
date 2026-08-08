const url = require('url');

const myUrl = new URL('https://example.com:8080/path?name=iqra');

console.log(myUrl.hostname);
console.log(myUrl.searchParams.get('name'));
