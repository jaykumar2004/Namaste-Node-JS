const http = require("node:http"); //we can write "node:http" or "http"

const server = http.createServer(function(req,res){ //req is request and res is respones

    if(req.url === "/getSecretData"){
        res.end("There is no secret data !!!")
    }
    res.end("HELLO WORLD");
});

server.listen(7777);
