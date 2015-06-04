var http = require('http');
var myServer = http.createServer(function(request, response) {
  response.writeHead(200,{"Content-Type": "text/html"});
  response.write("<b>hello</b> world");
  response.end(); 
});

myServer.listen(1234);

console.log("Server running at 1234");
