(function(window) {
	var speakWord = "Good Bye";
	var helloSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}
	window.helloSpeaker = helloSpeaker;
})(window);
