var express = require('express');
var path = require('path');
var app = express();

// serve static assets normally
app.use(express.static(__dirname + '/'))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(8000);
 
// start a webpack-dev-server with our config
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.development.js');
 
new WebpackDevServer(webpack(config), {
   hot: true,
   historyApiFallback: true,
   proxy: {
     "*": "http://localhost:8000"
   }
}).listen(8080, 'localhost', function (err, result) {
   if (err) {
     console.log(err);
   }

   console.log('Listening at localhost:8080');
});
