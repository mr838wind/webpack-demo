import _ from 'lodash';
import printMe from './print.js';


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

$(function(){
	init();
});

export default 'index';
