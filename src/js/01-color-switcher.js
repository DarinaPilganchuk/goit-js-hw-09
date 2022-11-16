
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const btnStartEl= document.querySelector('button[data-start]');
console.log(btnStartEl.dataset)
const btnStopEl= document.querySelector('button[data-stop]');
console.log(btnStopEl.dataset)
 let timerId= null;

const onButtonStartClick =() =>{
  
  btnStartEl.toggleAttribute('disabled');
  timerId = setInterval(() => {
    const bodyColor = getRandomHexColor();
  document.body.style.backgroundColor = bodyColor;
  
  }, 1000);
  
};

btnStartEl.addEventListener("click",onButtonStartClick );

const onButtonStoptClick =() =>{
  
  clearInterval(timerId);
  btnStartEl.removeAttribute('disabled');
  
};
btnStopEl.addEventListener("click", onButtonStoptClick);

