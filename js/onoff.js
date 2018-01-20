var accessToken = "3f0e95aca011b0cdcc821fb34e5a5233bade3298";
var deviceID = "3f0023000947353138383138"
var url = "https://api.spark.io/v1/devices/" + deviceID + "/led";

function switchOn()
{
	$.post(url, {params: "on", access_token: accessToken });
}

function switchOff()
{
	$.post(url, {params: "off", access_token: accessToken });
}
