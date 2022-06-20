import { Notify } from 'notiflix/build/notiflix-notify-aio';
//Notify.success();Notify.failure();
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
flatpickr("#datetime-picker", {enableTime: true,
	dateFormat: "Y-m-d H:i",
});
const Days = 0;
const Hours = 1;
const Minutes = 2;
const Seconds = 3;	 
let times = 0;
let timerId = null;
let diffOn = 0;
const inData = document.querySelector('#datetime-picker');
const digitVal = document.querySelectorAll('[class="value"]');
//console.log("digitVal", digitVal[Minutes]);
const btnStart = document.querySelector('button');
btnStart.setAttribute('disabled', true);

inData.addEventListener("input", () => {
	
	times = inData.value;
	const realTime = new Date();
	//console.log("realTime", realTime);
	const planTime = new Date(times);
	//console.log("planTime", planTime);

	if (realTime < planTime) {
		Notify.success(`PUSH START, please!`);// ${planTime} > ${realTime}`);
		const difference = planTime - realTime;
		btnStart.removeAttribute('disabled');
		
	} else {
		clearInterval(timerId);
		btnStart.setAttribute('disabled', true);
		Notify.failure(`Please select a different date ${planTime }`);
	}
	//return inData.value;
});
//const timerOn = ()

btnStart.addEventListener("click", () => {
	timerId = setInterval(() => {
		times = inData.value;
		const realTime = new Date();
		//console.log("realTime", realTime);
		const planTime = new Date(times);
		diffOn = planTime - realTime;
		if (planTime > realTime) {
			//console.log(`I love async JS!  ${diffOn}`);
			digitVal[Days].textContent = new Date(diffOn).getUTCDate() - 1;
			digitVal[Hours].textContent = new Date(diffOn).getUTCHours();
			digitVal[Minutes].textContent = new Date(diffOn).getUTCMinutes();
			digitVal[Seconds].textContent = new Date(diffOn).getUTCSeconds();
		} else { 
			clearInterval(timerId);
			Notify.success(`${diffOn} Hooray! earned!`);
		}
  }, 1000);
});



// digitVal[Days].textContent    = new Date(difference).getUTCDate()-1;
// 		digitVal[Hours].textContent   = new Date(difference).getUTCHours();
// 		digitVal[Minutes].textContent = new Date(difference).getUTCMinutes();
// 		digitVal[Seconds].textContent = new Date(difference).getUTCSeconds();