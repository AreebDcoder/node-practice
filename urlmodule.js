const url = require('url');
const URL = new URL('https://example.org');

myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
console.log(URL)
console.log(URL.href)
