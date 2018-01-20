var accessToken = "3f0e95aca011b0cdcc821fb34e5a5233bade3298";
var deviceID = "3f0023000947353138383138"
var url = "https://api.spark.io/v1/devices/" + deviceID + "/morse";

function callback(data, status){
	if (data.return_value == 1) {
		alert("Your Message is being sent");
	}
	else
	{
		alert("Could not Connect to Photon");
	}
}

function sendMorse(){
	message = $("#message").val();
   	$.post(url, {params: message, access_token: accessToken}, callback);
}