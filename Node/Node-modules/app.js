/**
 * http://usejsdoc.org/
 */

// var a = require('./package1/module-a');
var package1Mod = require('./package1');
var _ = require('underscore');

// console.log('app.js..');

// package1Mod();

// console.log(_.max([10,20,30]));

var arrayUtil = {
	findMaximum : function(array) {
		return _.max(array);
	},
	findMinimun:function(array){
		return _.min(array);
	}
};

module.exports = arrayUtil;










