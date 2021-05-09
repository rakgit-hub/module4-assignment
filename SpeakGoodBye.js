(function(window) {
	var speakWord = "Good Bye";
	var byeSpeaker = function speak (name) {
		console.log(speakWord + " " + name);
	}
	window.helloSpeaker = helloSpeaker;
})(window);
