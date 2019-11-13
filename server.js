const http = require('http');

const app = require('./app');
const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Ready for WAR -> ${port}`);
});

// author : sachin duhan
// contact : 8586821051
// email : duhan.sachin126@gmail.com
