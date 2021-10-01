const http = require("http");
const url = require("url");

const server = http.createServer(function (req, res) {
    // get parsed url
    const parsedUrl = url.parse(req.url, true);

    // get url path
    const path = parsedUrl.pathname;

    // trim slashes
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // get http method
    const method = req.method.toLowerCase();

    // get query string as object
    let queryStringObject = JSON.stringify(parsedUrl.query);

    res.end("Hello World!");
    console.log(`Request received on path: ${trimmedPath} with a ${method} request type and with these query string params ${queryStringObject}.`);
})

server.listen(4000, () => {
    console.log("App running on port 4000");
})