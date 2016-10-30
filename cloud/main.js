
Parse.Cloud.define('hello', function (req, res) {
	res.success('Hi');
});

Parse.Cloud.define('register', function (req, res) {

	try {
		var user = new Parse.User();
		user.email = req.params.email;
		user.password = req.params.password; //todo improve
		user.username = req.params.username;
		user.emailVerified = true;
		res.send(true);
	} catch (e) {
		res.send(false);
	}
	/*
	var query = new Parse.Query("Trip");
	query.include('user');
	query.equalTo("user", user);
	query.find({
		success: function (results) {
			var sum = 0;
			for (var i = 0; i < results.length; ++i) {
				sum += results[i].get("end") - results[i].get("start");
			}
			response.success(sum);
		},
		error: function () {
			response.error("trip lookup failed");
		}
	});
	*/
});