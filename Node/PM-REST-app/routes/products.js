/**
 * http://usejsdoc.org/
 */

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = mongoose.model('Item');

// uri: /products

router.get("/", function(req, res) {
	Item.find(function(err, items) {
		res.json(items);
	});
});

router.post("/", function(req, resp) {
	var reqBody = req.body;
	var item = new Item(reqBody);
	item.save(function(err, result) {
		resp.json(result);
	});
});



module.exports = router;