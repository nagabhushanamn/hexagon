/**
 * http://usejsdoc.org/
 */

var express = require('express');
var app = express();



//app.get("/", function(req, res) {
//	res.send('Hello from Express JS');
//});

// Basic Routing
//----------------------

// HTTP-method

//app.get("/", function(req, res) {
//res.send('Got a GET request..');
//});
//app.post("/", function(req, res) {
//	res.send('Got a POST request..');
//});
//app.put("/", function(req, res) {
//	res.send('Got a PUT request..');
//});
//app['delete']("/", function(req, res) {
//	res.send('Got a DELETE request..');
//});



//static file ( css , client-side JS files , images , etc.. )
//-----------------------------------------------------

//app.use("/",express.static(__dirname+"/public"));
//app.use("/css",express.static(__dirname+"/public/css"));
//
//
//


//----------------------------------------------------

//advanced Routing

//app.get("/ab?cd", function(req, res) {
//	res.send('/ab?cd request');
//});


//app.get("/ab*cd", function(req, res) {
//	res.send('/ab?cd request');
//});

//app.get(/.*pdf$/, function(req, res) {
//	res.send('/pdf request');
//});

//------------------------------------

//app.get("/a", function(req, res,next) {
//	console.log('handling in func-1');
//	next();
//},function(req,resp){
//	resp.send('response from func2()');
//});
//
//

//------------------------------------

/*
 *  express's resp obj methods
 *  
 *  resp.send();
 *  resp.json();
 *  resp.download();
 *  resp.sendStatus();
 *  
 *  
 *  express + TemplateEngine  ==> dynamic HTML response
 *  
 *             jade
 *             hogan
 *             ejs
 *             handlebars
 *             
 *   resp.render('view-name');          
 * 
 */


app.listen(3000, function() {
console.log('ap listening on port 3000');
});














