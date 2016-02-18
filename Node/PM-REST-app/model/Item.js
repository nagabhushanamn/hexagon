/**
 * http://usejsdoc.org/
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
	name : String,
	price : Number,
	description : String,
	make : {
		type : Date
	},
	canBuy : Boolean,
	notAvailable : Boolean
});

mongoose.model('Item', itemSchema);
