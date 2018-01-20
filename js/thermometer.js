var accessToken = "3f0e95aca011b0cdcc821fb34e5a5233bade3298";
var deviceID = "58003e000e51353532343635"
var url = "https://api.spark.io/v1/devices/" + deviceID + "/tempf";

function callback(data, status){
	if (status == "success") {
		temp = parseFloat(data.result);
		temp = temp.toFixed(2);
		g.refresh(temp);
		setTimeout(getReading, 1000);
	}
	else {
		alert("There was a problem");
	}
}

function getReading(){
   	$.get(url, {access_token: accessToken}, callback);
}