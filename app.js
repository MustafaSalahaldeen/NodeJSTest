const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Set the content type to HTML
    const method = req.method;
    const url = req.url;

    if (method === "POST" && url === "/message"){
        const body = [];

        req.on('data' , (chunck) => {
            body.push(chunck);
        });
        
        req.on('end' , () => {
            let message = Buffer.concat(body).toString(); 
            message = message.split('=');
            message = message[1];
            fs.writeFileSync('./message.txt' , message);
            res.write('<html> <header> <title>Test NodeJS</title> </header> <body> <h1>Thank u for submiting</h1> </body> </html>');
            return res.end();
        });  

    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html> <header> <title>Test NodeJS</title> </header> <body> <form method="POST" action="/message"> <input type="text" name="message"></input> <button type="submit">SUBMIT</button> </form> </body> </html>');
    return res.end();
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
