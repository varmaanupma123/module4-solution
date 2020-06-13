(function(window){
	var yakoovGreeting = {};
	yakoovGreeting.name = "Ram";
	var greeting = "Hello! ";
	yakoovGreeting.sayHello = function(){
		console.log(greeting + yakoovGreeting.name);
	}
	window.yakoovGreeting = yakoovGreeting;
	
})(window);
