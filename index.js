const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
// took this from the slides 
http
    .createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");


        switch (req.url) {
            case "/":
                res.write("<h1 style='color: red'>Hello World!</h1>");
                res.write("<p>I wonder what else we can send...</p>");
                res.write("<p>Try visiting <a href='/test'>/test</a></p>");
                break;
            case "/cats":
                res.write("CATS");
                break;

            case "/dogs":
                res.write("DOGS");
                break;

            case "/meow":
                res.write("meow");
                break;

            case "/woof":
                res.write("woof");
                break;
            default:
                res.statusCode = 404;
                res.write("Error: 404 Not Found");
                break;
        }

        res.end();
    })
    .listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
        
      });