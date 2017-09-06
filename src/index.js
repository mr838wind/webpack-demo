import _ from 'lodash';
import printMe from './print.js';
import greeter from './greeter.ts';


function init() {

	  var div$ = $('<div>');
	  div$.html(_.join(['Hello', 'webpack'], ' '));
	  $('body').append(div$);
	  
	  var btn$ = $('<button>');
	  btn$.html('Click me and check the console! jquery!');
	  btn$.click(function(){
		  printMe();
	  });
	  div$.append(btn$);
	  
	  return div$;
}

function testTypeScript() {
	var user = 'miky mouse';
	console.log(greeter(user)); 
}

$(function(){
	init();
	testTs();
});

export default 'index';
