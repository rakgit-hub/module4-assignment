(function(window) {
	var speakWord = "Good Bye";
	var speakGoodbye = function speak (name) {
		console.log(speakWord + " " + name);
	}
	window.helloSpeaker = helloSpeaker;
})(window);
