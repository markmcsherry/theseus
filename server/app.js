"use strict";

var express = require('express');
//var helmet = require('helmet'); //TODO: Look at using this to set HTTP headers
//var express_enforces_ssl = require('express-enforces-ssl'); //TODO: Force HTTPS
var serveStatic = require('serve-static');
var config = require('config');
var fs = require('fs');
var pathToStatic = "/home/ubuntu/workspace/client/public/json/";

var app = express();

//Setup static serveing to public folder
var spath = config.get("expressSettings.publicPath");
console.log('Static being served from:' + spath);
app.use(express.static(spath)); //Serve static resources from this path


//Setup resource routes
app.get('/user', function (req, res) {
  res.send('User Info...');
})

//Setup resource routes
app.get('/maze', function (req, res) {
  res.send('Maze Info...');
})

//Setup resource routes
app.get('/maps', function (req, res) {
  var mapData = 'xx';   

  fs.readFile(pathToStatic+'mymaps.json', 'utf8', function (err,data) {
    if (err) {
      res.send('404 - Page not found', 404);      //Send an error
      console.log('Oops something went wrong');
      return console.log(err);
    }
    console.log('Map Data read *static*'+data);
    mapData = data;
//    return data;
  });
  console.log(mapData);  //mapData is blank here WTF

  res.send(mapData);
  
  
})







app.get('*', function (req, res) {
  res.send('404 - Page not found', 404);
})

//app.post('')



app.listen(process.env.PORT, process.env.IP);

console.log("Server up..."); 


