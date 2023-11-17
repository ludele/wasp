const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const { promisify } = require('util');
const url = require('url');

const port = 25565;

const routes = {};

function get(path, greetText = 'Hej') {
    routes[path] = { greetText };
}

function handleRequest(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const route = routes[parsedUrl.pathname];

    if (route) {
        const greetText = route.greetText;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(greetText);
    } else {
        // Serve dynamic HTML for any other route
        const dynamicValue = 'This is a dynamic value!';
        serveDynamicHtml(res, dynamicValue);
    }
}

function serveDynamicHtml(res, dynamicValue) {
    const dynamicHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Dynamic Page</title>
        </head>
        <body>
            <h1>${dynamicValue}</h1>
        </body>
        </html>
    `;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(dynamicHtml);
}

const server = http.createServer((req, res) => {
    handleRequest(req, res);
});

const listenAsync = promisify(server.listen).bind(server);

async function startServer() {
    try {
        await listenAsync(port);
        console.log('Server listening on port ' + port);
    } catch (error) {
        console.error('Error starting server:', error.message);
    }
}

// Define routes with associated greeting text
get('/', 'Hello');
get('/hello', 'Hello again');

startServer();
