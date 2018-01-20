var accessToken = "3f0e95aca011b0cdcc821fb34e5a5233bade3298";
var deviceID = "58003e000e51353532343635"
var url = "https://api.spark.io/v1/devices/" + deviceID + "/volts";

function callback(data, status){
	if (status == "success") {
		volts = parseFloat(data.result);
		volts = volts.toFixed(2);
		g.refresh(volts);
		setTimeout(getReading, 1000);
	}
	else {
		alert("There was a problem");
	}
}

function getReading(){
   	$.get(url, {access_token: accessToken}, callback);
}