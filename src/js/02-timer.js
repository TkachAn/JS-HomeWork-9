import { Notify } from 'notiflix/build/notiflix-notify-aio';
//Notify.success();Notify.failure();
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
flatpickr("#datetime-picker", {enableTime: true,
    dateFormat: "Y-m-d H:i",});
let times = 0;
const inData = document.querySelector('#datetime-picker');
console.log('g');
const date = new Date();
inData.addEventListener("input", () => {
	//console.log("inData1",inData.value);
	times = inData.value;
	console.log("times", times);
	const datein1 = new Date();
	console.log("datein1", datein1.getTime());
	const datein2 = new Date(times);
	console.log("datein2", datein2.getTime())
	return inData.value;
});
console.log("times1",times);
const datein1 = new Date();