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
			createPromise(dv, av, sv)
			.then(`✅ Fulfilled promise ${dv}  ${av} in ${sv}ms`)
			
			.catch(`❌ Rejected promise ${dv}  ${av} in ${sv}ms`)
			;
		//})
	}, dv);
});//.
const createPromise = (delay, position,stepDelay )=> {
  return new Promise((resolve, reject) => {
    //console.log(`delay ${stepDelay}`);
	let cnt = 1;
		// const av = amount.value;
		// const sv = step.value;
	  Notify.success(`Fulfilled promise ${cnt} in ${delay}`);
		let counter = setInterval(() => {
			const shouldResolve = Math.random() > 0.3;
			if (shouldResolve) {
				resolve(`Fulfilled promise ${position} in ${stepDelay}`);
				//console.log("resolve step:", cnt, " ms:", cnt * stepDelay+Number(delay));
				Notify.success(`Fulfilled promise ${cnt+1} in ${cnt * stepDelay+Number(delay)}`);	// Fulfill
			} else {
				reject(`rejected promise ${position} in ${stepDelay}`);
				//console.log("reject step:", cnt, " ms:", cnt * stepDelay+Number(delay));
				Notify.failure(`rejected promise ${cnt+1} in ${cnt * stepDelay+Number(delay)}`);	// Reject
			}
			// console.log("step:", cnt," ms:", cnt*delay);
			if (cnt > position-1) {
				clearInterval(counter);
			}
			cnt++;
		},stepDelay)
  });
	
};
