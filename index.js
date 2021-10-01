const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;

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
    const queryStringObject = JSON.stringify(parsedUrl.query);

    // get headers
    const headers = req.headers;

    // log payload

    let decoder = new StringDecoder('utf-8');

    let buffer = '';

    req.on('data', function (data) {
        buffer += decoder.write(data);
    })

    req.on('end', function () {
        buffer += decoder.end()
        res.end("Hello World!");
        console.log(`Request received on path: ${trimmedPath} with a ${method} request type, with these query string params ${queryStringObject}, with these headers ${headers} and this payload ${buffer}.`);
    })

})

server.listen(4000, () => {
    console.log("App running on port 4000");
})