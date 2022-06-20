import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
flatpickr("#datetime-picker", {
	enableTime: true, dateFormat: "Y-m-d H:i",
});
const Days = 0;
const Hours = 1;
const Minutes = 2;
const Seconds = 3;	

let times = 0;
let timerId = null;
let diffOn = 0;

const inputData = document.querySelector('#datetime-picker');
const digitVal = document.querySelectorAll('[class="value"]');
const btnStart = document.querySelector('button');

btnStart.setAttribute('disabled', true);
inputData.addEventListener("input", () => {
	
	times = inputData.value;
	const realTime = new Date();
	const planTime = new Date(times);
	
	if (realTime < planTime) {
		Notify.success(`PUSH START, please!`);
		const difference = planTime - realTime;
		btnStart.removeAttribute('disabled');
	} else {
		clearInterval(timerId);
		btnStart.setAttribute('disabled', true);
		Notify.failure(`Please select a different date ${planTime }`);
	}
	
});

btnStart.addEventListener("click", () => {
	timerId = setInterval(() => {
		times = inputData.value;
		const realTime = new Date();
		const planTime = new Date(times);
		diffOn = planTime - realTime;
		if (planTime > realTime) {
			btnStart.setAttribute('disabled', true);

			second = new Date(diffOn).getUTCSeconds();
			minute = new Date(diffOn).getUTCMinutes();
			hour = new Date(diffOn).getUTCHours();
			day = new Date(diffOn).getUTCDate() - 1;

			digitVal[Days].textContent = (day < 10) ? '0' + day : day;
			digitVal[Hours].textContent = (hour < 10) ? '0' + hour : hour;
			digitVal[Minutes].textContent = (minute < 10) ? '0' + minute : minute;
			digitVal[Seconds].textContent = (second < 10) ? '0' + second : second;
		} else {
			clearInterval(timerId);
			Notify.success(`$Hooray! earned!`);
		}
  }, 1000);
});


// digitVal[Days].textContent    = new Date(difference).getUTCDate()-1;
// 		digitVal[Hours].textContent   = new Date(difference).getUTCHours();
// 		digitVal[Minutes].textContent = new Date(difference).getUTCMinutes();
// 		digitVal[Seconds].textContent = new Date(difference).getUTCSeconds();