const form = document.forms[0];
console.log(form);
const delay = form.delay;
console.log(delay);
const step = form.step;
console.log(step);
const amount = form.amount;
console.log(amount);
const button = form.elements[3];
console.log(button);
delay.value = 3000;

button.addEventListener("click", () => { 

let cnt = 0;
let counter = setInterval(() => {
	cnt ++;
	console.log("setTimeout delay", cnt);
	if (cnt > 9) {
		clearInterval(counter);
	}
}, step);

console.log("counter", counter);

});





function createPromise(position, delay) {
	const shouldResolve = Math.random() > 0.3;
	setTimeout(() => {
		if (shouldResolve) {
									// resolve(console.log("Fulfill"));
				} else {
					console.log("Reject");
				}
		return new Promise((resolve, reject) => {})
  }, position)
}




//createPromise(2000, 5000);//delay

// for (let i = 0; i < 10; i++) {}
// const Amount = 100;
// function createPromise(position, delay) {
// 	// setTimeout(() => {}, position)
// 		// for (let i = 0; i < Amount; i++) { }
// 		return new Promise((resolve, reject) => {
// 			const shouldResolve = Math.random() > 0.3;
// 			if (shouldResolve) {
// 				resolve(console.log("Fulfill"));
// 			} else {
// 				reject(console.log("Reject"));
// 			}
// 		}
// 		)
	
// }

