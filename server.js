const http = require('http');

http.createServer((req, res) => {
    res.write("Backend server running!");
    res.end();
}).listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});