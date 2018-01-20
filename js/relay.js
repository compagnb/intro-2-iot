var accessToken = "3f0e95aca011b0cdcc821fb34e5a5233bade3298";
var deviceID = "2c0047000a47353138383138"
var url = "https://api.spark.io/v1/devices/" + deviceID + "/relay";

function setRelay(message)
{
	$.post(url, {params: message, access_token: accessToken });
}  