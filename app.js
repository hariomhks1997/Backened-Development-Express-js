const http=require("http/about");
// function rqListener(req,res){

// }
// http.createServer(rqListener);
// http.createServer(function(req,res){

// });
const server=http.createServer((req,res)=>{
    //console.log(res.url,req.method,req.headers);
   //console.log(req)
   //process.exit();
   res.setHeader('Content-Type',"text/html")
   res.write('<html>');
   res.write('<head><title>My First Page</title></head>')
   res.write("<body><h1>Hello From My Node.js</h1></body>")
   res.write('</html>');
   res.end();
   
});
server.listen(4000);