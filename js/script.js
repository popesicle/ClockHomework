window.onload = function() {

	console.log("In we go!")

		
	var clockTime = document.getElementById("displaytime");
		// names the clocktime variable as the displaytime CSS id

	var bGroundColor = document.getElementById("clockbackground")
	// Sets the bgroundColor variable for the CSS ID clockbackground
	
	var hexColor = ""

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
    	// displays the time.
    }

    var getHex = function(){
    	var color = new Date();
	    var hex1 = color.getHours()
	    	if(hex1 < 10) hex1= "0" + hex1;
	    var hex2 = color.getMinutes()
	    	if(hex2 < 10) hex2 = "0" + hex2;
		var hex3 = color.getSeconds()
	    	if(hex3 < 10) hex3 = "0" + hex3;
	    hexColor = hex1.toString(16)+hex2.toString(16)+hex3.toString(16)
    		if(hexColor.length <= 5) hexColor = hexColor + "0"
    		if(hexColor.length <= 4) hexColor = "0" + hexColor + "0"
    		if(hexColor.length <= 3) hexColor = "10" + hexColor + "0"
    	bGroundColor.style.background = "radial-gradient( #ffffff," + "#" + hexColor+ ")"		
    }	

	getTime();
	// invokes the getTime() function starting the clock
	getHex();

	setInterval(getHex, 1000)
	
	setInterval(getTime, 1000)
    // invokes the getTime() function in intervals of 1 second.
    

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



	
	
}

