const http = require("http");
const url = require("url");

const server = http.createServer(function (req, res) {
    // get parsed url
    const parsedUrl = url.parse(req.url, true);

    // get url path
    const path = parsedUrl.pathname;

    // trim slashes
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    res.end("Hello World!");
    console.log(trimmedPath);
})

server.listen(4000, () => {
    console.log("App running on port 4000");
})