/**
 * http://usejsdoc.org/
 */

// find DOM elements , register listeners
//document.addEventListener('DOMContentLoaded', function(e) {
//	
//	console.log('DOM Ready...');
//
//	var box = document.querySelector('.jumbotron');
//	var showBtn = document.querySelector('.btn-success');
//	var hideBtn = document.querySelector('.btn-danger');
//
//	showBtn.addEventListener('click', function(e) {
//		box.style.display = 'block';
//	});
//	hideBtn.addEventListener('click', function(e) {
//		box.style.display = 'none';
//	});
//
//});
//
//window.onload = function() {
//	console.log('Window ready');
//}

//------------------------------------

$(document).ready(function(){
	var box=$('.jumbotron');
	$('.btn-success').click(function(){
		//box.css('display', 'block');
		box.show();
	});
	$('.btn-danger').click(function(){
		//box.css('display', 'none');
		box.hide();
	});
});


//------------------------------------











