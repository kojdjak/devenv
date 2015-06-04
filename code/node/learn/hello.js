var http = require('http');
var myServer = http.createServer(function(request, response) {
  response.writeHead(200,{"Content-Type": "text/html"});
  response.write("<b>hello</b> world");
  response.end(); 
});

myServer.listen(3000);

console.log("Server running at 3000");
