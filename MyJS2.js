(function(window){
	var jhonGreeting = {};
	jhonGreeting.name = "Jhony";
	var greeting = "GoodBye! ";
	jhonGreeting.sayGoodBye = function(){
		console.log(greeting + jhonGreeting.name);
	}
	window.jhonGreeting = jhonGreeting;
	
})(window);
