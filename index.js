// const http = require('http');
// const fs = require('fs');
const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"), (err) => {
    if (err) {
      throw err;
    } else {
      console.log("File Sent!");
    }
  });
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "./about.html"), (err) => {
    if (err) {
      throw err;
    } else {
      console.log("About Sent!");
    }
  });
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"), (err) => {
    if (err) {
      throw err;
    } else {
      console.log("Contact sent!");
    }
  });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`RelyServer listening on port ${PORT}!`);
});

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   if (req.url === '/') {
//     fs.readFile('./index.html', 'utf-8', (err, data) => {
//       if (err) throw err;
//       res.writeHead(200, { "content-type": 'text/html' });
//       res.end(data);
//     });
//   } else if (req.url === '/about') {
//     fs.readFile('./about.html', 'utf-8', (err, data) => {
//       if (err) throw err;
//       res.writeHead(200, { "content-type": 'text/html' });
//       res.end(data);
//     });
//   } else if (req.url === '/contact-me') {
//     fs.readFile('./contact-me.html', 'utf-8', (err, data) => {
//       res.writeHead(200, { "content-type": 'text/html' });
//       res.end(data);
//     });
//   } else {
//     fs.readFile('./404.html', 'utf-8', (err, data) => {
//       res.writeHead(200, { "content-type": 'text/html' });
//       res.end(data);
//     });
//   };

// });

// server.listen(PORT, console.log(`Server running on ${PORT}`));
