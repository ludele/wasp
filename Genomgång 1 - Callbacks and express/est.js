const { createServer } = require('./router');

const port = 25565;

const server = createServer();

server.listen(port, () => {
    console.log('Server listening on port ' + port);
});
   