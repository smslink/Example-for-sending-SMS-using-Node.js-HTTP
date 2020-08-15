var http = require("https");

/* 

  Get your SMSLink / SMS Gateway Connection ID and Password from 
  https://www.smslink.ro/get-api-key/

*/

var options = {
	"method": "GET",
	"hostname": "secure.smslink.ro",
	"port": null,
	"path": "/sms/gateway/communicate/index.php?connection_id=MyConnectionID&password=MyConnectionPassword&to=07xyzzzzzz&message=MyMessage",
	"headers": {
		"useQueryString": true
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();
