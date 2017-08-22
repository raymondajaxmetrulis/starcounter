var colors = require('./node_modules/colors/lib/index');

function starCounter() {
	var asterisks = 10;

	function myLoop () {
	    setTimeout(function () { 
	        var asterisk = "*".green;
	         console.log(asterisk.repeat(asterisks));
	         asterisks--;
	         if (asterisks > 0) {
	             myLoop();
	          }
	    }, 1000)
	}

	myLoop();
};

module.exports = starCounter();