(function (window) {
	var johnGreeter = {}
	johnGreeter.name = "John"
	var greeting = "Hi "
	johnGreeter.sayHi = function () {
		console.log("Hi " + johnGreeter.name)
	}

	window.johnGreeter = johnGreeter

} )(window)


