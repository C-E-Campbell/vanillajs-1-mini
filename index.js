const body = document.getElementsByTagName("body");
const main = document.getElementsByTagName("main");
const button = document.getElementsByTagName("button");
const element = document.getElementById("counter");

let count = 0;

function increase() {
	count += 1;
	element.innerText = count;
}

function decrease() {
	count -= 1;
	element.innerText = count;
}

function reset() {
	count = 0;
	element.innerText = count;
}

function selectTheme(theme) {
	body[0].className = theme;
	main[0].className = theme;
	for (let i = 0; i < button.length; i++) {
		button[i].className = theme;
	}
}
