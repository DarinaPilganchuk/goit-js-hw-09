import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const InputDelayEl= document.querySelector('input[name=delay]')
// console.log(InputDelayEl)

// const InpuStepEl = document.querySelector('input[name=step]')
// console.log(InpuStepEl)

// const InputAmountEl = document.querySelector('input[name=amount]')
// console.log(InputAmountEl)

// const BtnEl = document.querySelector('button')
// console.log(BtnEl)


const formEl = document.querySelector('.form');
console.log(formEl)

formEl.addEventListener('submit',SubForm );
function SubForm(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget.elements;
  let delayVal = Number(delay.value);
  const stepVal = Number(step.value);
  const amountVal = Number(amount.value);
  console.log(delayVal);
  
  console.log(stepVal);

  let position = 1;

  for (let i = 0; i < amountVal; i += 1) {
    createPromise(position, delayVal)
      .then(result => Notify.success(result))

      .catch(error => Notify.failure(error));

    position += 1;
    delayVal = delayVal + stepVal;
  }
}

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
  
      setTimeout(() => {
        if (shouldResolve) {
          resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }, delay);
      
    });
  }