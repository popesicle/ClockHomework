window.onload = function() {

	console.log("In we go!")

	var randomNumber = function(a,b) {
		return Math.floor(a + Math.random() * (b-a+1))
	}

	var randBGround = randomNumber(0,16777215).toString(16)	
		//generates a random interger and turns it into a hex color code for HTML
		
	var clockTime = document.getElementById("displaytime");
		// names the clocktime variable as the displaytime CSS id


	var getTime = function(){
		var theTime = new Date();
	    var hours = theTime.getHours()
	    	if(hours < 10) hours= "0" + hours;
	    //Gets the hour of the day, if less than 10 adds a 0 in front of the number. 
	    var minutes = theTime.getMinutes()
	    	if(minutes < 10) minutes = "0" + minutes;
	    //Same as the hours. 
	    var seconds = theTime.getSeconds()
	    	if(seconds < 10) seconds = "0" + seconds;
	    //Same as the seconds. 
	    var currentTime = (hours + ":" + minutes + ":" + seconds)	
    	// function above pulls the time and spits it out in a 00:00:00 format.
    	clockTime.innerHTML=currentTime;
    	
    }

	getTime();
	// invokes the getTime() function starting the clock
	
	setInterval(getTime, 1000)
    // invokes the getTime() function in intervals of 1 second.
    
    var hexCode = document.getElementById("hexCode")
    // Sets the hexCode variable for the CSS id hexCode
	var bGroundColor = document.getElementById("clockbackground")
	// Sets the bgroundColor variable for the CSS ID clockbackground

	var split = function(str,num){
    	var array = [];

    	for (var i = 0; i < str.length; i += num){
    
        array.push(str.substr(i, num));
        // .substr pulls part of the string, starting from the first value and 
        // pulling everything up to and including the last value.
    }
    return array
	}
	// simple split function that splits up a string every nth character and pushes 
	// it to a new array.
	
	var result = split(randBGround, 2)
	 	hex1 = result[0].toUpperCase()
	 	hex2 = result[1].toUpperCase()
	 	hex3 = result[2].toUpperCase()
	 	// Splits up my hex color code so I can format it all pretty like.
		// Also capitlizing every pair in my hex.

	var wide = 10;
		divGrow = setInterval(function () {
		// Use's setInterval to increase the width of the progressbar div, making
		// it tick up in size every second.
    		if(wide>310){
    		wide = 10
    	}	 
    	wide = wide + 5;

    document.getElementById('progressbar').style.width = wide + 'px';
    }, 1000);


    bGroundColor.style.background = "radial-gradient( #ffffff," + "#" + randBGround+ ")"
	
	hexCode.innerHTML = hex1 + ":" + hex2 + ":" + hex3

	
}

