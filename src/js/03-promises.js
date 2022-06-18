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

// createPromise(7, 1500)
// 	.then(`✅ Fulfilled promise ${position} in ${delay}ms`)
// 	.catch(`❌ Rejected promise ${position} in ${delay}ms`);
  

   //  setTimeout(() => {
   //    // Change value of isSuccess variable to simulate request status
   //    const isSuccess = Math.random() > 0.5;

   //    if (isSuccess) {
   //      resolve("success value");
   //    } else {
   //      reject("error");
   //    }
   //  }, delay);


// function createPromise(position, delay) {
// 	let cnt = 1;
// 		// const av = amount.value;
// 		// const sv = step.value;
// 		let counter = setInterval(() => {
// 			 	const shouldResolve = Math.random() > 0.3;
// 				if (shouldResolve) {
// 					// Fulfill
// 				} else {
// 					// Reject
// 				}
// 			 console.log("step:", cnt," ms:", cnt*delay);
// 			if (cnt > position-1) {
// 				clearInterval(counter);
// 			}
// 			// ++cnt;
// 			cnt++;
// 		},delay)
// }

// function handleSubmit(event) {
// 	event.preventDefault();
// 	const {
// 		elements: {delay,step,amount}
// 	} = event.currentTarget;
// 	console.log("delay ", delay.value);
// 	const dv = delay.value;
// 	const av = amount.value;
// 	const sv = step.value;

// 	setTimeout(() => {
// 		return new Promise(
// 			(resolve, reject) => {
// 			const shouldResolve = Math.random() > 0.3;	
// 			if (shouldResolve) {
// 				resolve({ sv, av });
// 			 	console.log("STOP! function resolve", { av, sv });
// 			} else {
// 				reject({ av, sv });
// 				console.log("STOP! function reject", { av, sv });
// 			}
// 		}
// 	)
// 	}, dv);
// 	console.log("START! function");
// 	event.currentTarget.reset();
// }

// 		 const {
//     elements: { delay, step, amount}
//   } = event.currentTarget;
		// let cnt = 1;
		// const dv = delay.value;
		// const sv = step.value;
		// let counter = setInterval(() => {
		// 	createPromise(cnt, sv);
		// 	// console.log("step:", cnt," ms:", cnt*sv," summ ms:", Number(dv) + cnt*sv);
		// 	if (cnt > av-1) {
		// 		clearInterval(counter);
		// 	}
		// 	// ++cnt;
		// 	cnt++;
		// },sv)


// function createPromise(position, delay) {
// 	const shouldResolve = Math.random() > 0.5;
// 	console.log("shouldResolve:", shouldResolve);
// 	setTimeout(() => {
// 		if (shouldResolve) {
// 			  resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
// 		// return new Promise((resolve, reject) => {})
//   }, position)
// }


// let cnt = 1;
// 		const av = amount.value;
// 		const sv = step.value;
// 		let counter = setInterval(() => {
// 			createPromise(cnt, sv);
// 			// console.log("step:", cnt," ms:", cnt*sv," summ ms:", Number(dv) + cnt*sv);
// 			if (cnt > av-1) {
// 				clearInterval(counter);
// 			}
// 			// ++cnt;
// 			cnt++;
// 		},sv)

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

