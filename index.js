const http = require("http");

const server = http.createServer(function (req, res) {
    res.end("Hello World!")
})

server.listen(4000, () => {
    console.log("App running on port 4000");
})