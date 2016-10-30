
Parse.Cloud.define('hello', function (req, res) {
	res.success('Hi');
});

Parse.Cloud.define('register', function (req, res) {
	console.log("Register!"); 
	if(req.params.password && req.params.username && (req.params.email.indexOf('@') !== -1) ){		
		try {
			var user = new Parse.User();
			user.set("email", req.params.email);
			user.set("password", req.params.password);
			user.set("username", req.params.username);
			user.emailVerified = true;
			user.save(null,{
				success:function(current){
					console.log("OK"); 
				},error: function(current){
					console.log("error");
				}
			});
			res.success(true);
		} catch (e) {
			res.success(false);
		}
	}
	else{
		res.success(false);
	}
});