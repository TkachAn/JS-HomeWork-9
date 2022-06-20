//import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// const form = document.querySelector(".form");
const form = document.forms[0];
form.addEventListener("submit", (event) => {
	event.preventDefault();
	const {
		elements: {delay,step,amount}
	} = event.currentTarget;
	console.log("delay ", delay.value);
	const dv = delay.value;
	const av = amount.value;
	const sv = step.value;
	event.currentTarget.reset();
	setTimeout(() => {
		// return new Promise((resolve, reject) => {
		// 	resolve({ av, sv });
			createPromise(av, sv)
			.then(`✅ Fulfilled promise ${av} in ${sv}ms`)
			
			.catch(`❌ Rejected promise ${av} in ${sv}ms`)
			;
		//})
	}, dv);
});//.
const createPromise = (position,delay )=> {
  return new Promise((resolve, reject) => {
    console.log(`delay ${delay}`);
	let cnt = 1;
		// const av = amount.value;
		// const sv = step.value;
		let counter = setInterval(() => {
			const shouldResolve = Math.random() > 0.3;
			if (shouldResolve) {
				resolve(`Fulfilled promise ${position} in ${delay}`);
				console.log("resolve step:", position, " ms:", cnt * delay);
				Notify.success(`Fulfilled promise ${position} in ${delay}`);	// Fulfill
			} else {
				reject(`rejected promise ${position} in ${delay}`);
				console.log("reject step:", position, " ms:", cnt * delay);
				Notify.failure(`rejected promise ${position} in ${delay}`);	// Reject
			}
			// console.log("step:", cnt," ms:", cnt*delay);
			if (cnt > position-1) {
				clearInterval(counter);
			}
			cnt++;
		},delay)
  });
	
};
