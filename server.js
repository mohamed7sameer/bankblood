var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: './dist',            // required, the root of the server file tree
  port: 1111,               // required, the port to listen
});


server.start(function () {
  console.log('######################');
    var cp = require("child_process");
    cp.exec("start http://127.0.0.1:" + server.port); // notice this without a callback..
    // process.exit(0); // exit this nodejs process
  console.log('Server listening to', server.port);
  console.log('######################');
});
