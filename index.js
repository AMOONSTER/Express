/*const http = require('http');
const requestHandler=(req, res)=>{
  console.log('server hit');
  console.log(req);
  if(req.url=='/page'){
    res.setHeader('Content-Type','text/html')
    res.end('<h1>Hello Page</h1>')
  }else{
    res.end('hello user');
  }
 
}

const server = http.createServer(requestHandler);
port = 3000;
host = "localhost";
server.listen(port,host,()=>{
   console.log(`server started at ${host}:${port}`);
})*/

const exp = require('express');
const app = exp();
app.get('/',(req, res, )=>{
res.send('Hello world');
})
app.listen(3000,()=>{
  console.log('Server begin in port:3000')
})