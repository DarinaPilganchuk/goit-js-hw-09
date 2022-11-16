
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dayTimerEl = document.querySelector('[ data-days]');
const hourTimerEl = document.querySelector('[data-hours]');
const minTimerEl = document.querySelector('[data-minutes]');
const secTimerEl = document.querySelector('[data-seconds]');
const btnStartEl = document.querySelector('[data-start]');

const today = new Date().getTime();
console.log(today);

let timer = {};
let selectedDate = null;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    console.log(selectedDate);
    if (selectedDate > today) {
      btnStartEl.removeAttribute('disabled');
      onClickBtnStart();
    } else {
      btnStartEl.setAttribute('disabled', true);
      Notify.failure('Please choose a date in the future');
    }
  },
};

flatpickr('#datetime-picker', options);

function onClickBtnStart() {
  btnStartEl.addEventListener('click', onStartTimer);
}
function onStartTimer() {
  timerId = setInterval(onWorkTimer, 1000);
}

function onWorkTimer() {
  const timeToFinish = selectedDate - new Date().getTime();
  console.log(timeToFinish);
  convertMs(timeToFinish);
  console.log(convertMs(timeToFinish));

  dayTimerEl.textContent = timer.days;
  hourTimerEl.textContent = addLeadingZero(timer.hours);
  minTimerEl.textContent = addLeadingZero(timer.minutes);
  secTimerEl.textContent = addLeadingZero(timer.seconds);

  if (timeToFinish < 1000) {
    clearInterval(timerId);
    console.log(selectedDate);
    console.log(timerId);
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return (timer = { days, hours, minutes, seconds });
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}