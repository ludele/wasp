const http = require('http');
const { createReadStream } = require('fs');
const { promisify } = require('util');
const path = require('path');

const readFileAsync = promisify(createReadStream);

function createServer() {
    return http.createServer(async (req, res) => {
        try {
            const dynamicRouteHandler = getDynamicRouteHandler(req.url);

            if (dynamicRouteHandler) {
                await dynamicRouteHandler(req, res);
            } else {
                // Serve static files from the 'static' directory
                await serveStatic(req, res);
            }
        } catch (error) {
            handleError(res);
        }
    });
}

const dynamicRoutes = {
    // Add dynamic routes as needed
};

function getDynamicRouteHandler(url) {
    return dynamicRoutes[url] || null;
}

async function serveStatic(req, res) {
    const filePath = path.join(__dirname, 'static', req.url);

    try {
        const data = await readFileAsync(filePath);

        // Set Content-Type based on file extension
        let contentType = 'text/html';
        if (path.extname(filePath) === '.css') {
            contentType = 'text/css';
        }

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    } catch (error) {
        handleError(res);
    }
}

function handleError(res) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
}

module.exports = {
    createServer,
};