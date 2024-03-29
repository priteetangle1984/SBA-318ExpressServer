const http = require('http');
const fs = require ('fs');
const _ = require('lodash');


const server = http.createServer((req, res) => {
console.log(req.url, req.method);

// header content type----------------
res.setHeader('Content-Type', 'text/html');

let path = './views/';
switch(req.url) {
    case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
        case '/about-blogs':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
    case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
            default:
            path += '404.html';
            res.statusCode = 404;
            break;
}

fs.readFile(path, (err, data) => {
    if (err) {
        console.log(err);
        res.end();
    } else {
        res.write(data);
        res.end();
    }
})


// res.write('<head><link rel="stylesheet" href="#"></head>');
// res.write('<p>hello Bloggers</p>');
// res.write('<p>hello again, Bloggers</p>');
// res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on the port 3000');
});