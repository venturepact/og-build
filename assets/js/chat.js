function ogAnimationInit(e) {
	var chatCircle = document.getElementById("bot-circle");
	chatCircle.classList.toggle("active");
	var chatBox = document.getElementById("og-chat-box");
	chatBox.classList.toggle("no-animation");
}

function ogAnimationClose(e) {
	setTimeout(() => {
		var chatCircle = document.getElementById("bot-circle");
		chatCircle.classList.toggle("active");
	}, 100);
	var chatBox = document.getElementById("og-chat-box");
	chatBox.classList.toggle("no-animation");
}