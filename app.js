const http = require('http');

http.createServer(function (req, res){

	res.write("docs.coffee is a website to share information and guides for great coffee.");
	res.end();

}).listen(3000);

console.log("Server started on port 3000");
