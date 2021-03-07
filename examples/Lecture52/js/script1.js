(function(window) {
	var shamirGreeter = {}
	shamirGreeter.name = "Shamir"
	var greeting = "Hello "
	shamirGreeter.sayHello = function () {
		console.log(greeting + shamirGreeter.name)
	}

	window.shamirGreeter = shamirGreeter

})(window)
