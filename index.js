const http = require('http');
const fs = require('fs');

const PORT = 8080;

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === '/') {    
    fs.readFile('./index.html', 'utf-8', (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "content-type": 'text/html' });
      res.end(data);
    });    
  } else if (req.url === '/about') {
    fs.readFile('./about.html', 'utf-8', (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "content-type": 'text/html' });
      res.end(data);
    });
  } else if (req.url === '/contact-me') {
    fs.readFile('./contact-me.html', 'utf-8', (err, data) => {
      res.writeHead(200, { "content-type": 'text/html' });
      res.end(data);
    });
  } else {
    fs.readFile('./404.html', 'utf-8', (err, data) => {
      res.writeHead(200, { "content-type": 'text/html' });
      res.end(data);
    });
  };
  
});

server.listen(PORT, console.log(`Server running on ${PORT}`));