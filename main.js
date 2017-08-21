function starCounter() {
	var asterisks = 10;

	function myLoop () {
	    setTimeout(function () { 
	        var asterisk = "*";
	         console.log(asterisk.repeat(asterisks));
	         asterisks--;
	         if (asterisks > 0) {
	             myLoop();
	          }
	    }, 1000)
	}

	myLoop();
};