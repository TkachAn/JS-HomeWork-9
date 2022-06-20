const background = document.querySelector("body");
const startBtn = document.querySelector("button[ data-start]");
const stopBtn = document.querySelector("button[ data-stop]");
let timer = null;
startBtn.addEventListener("click", () => {
	setColor();
	if(timer === null){
		timer = setInterval(setColor, 1000);
	}
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
	console.log(`Interval with id ${timer} has stopped!`); timer = null;
});

function setColor() {
	let hex = `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`
	 background.style = `background-color: ${hex};`
	console.log("setHex:", hex);
  return hex;
	
}
function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}