const genNum = document.querySelector(".genNum");
const inNumForm = document.querySelector("#inNumForm");
const inNum = document.querySelector(".inNum");
const result = document.querySelector(".result");
const answer = document.querySelector(".answer");

function generateNum(event) {
  event.preventDefault();
  let numRange = parseInt(genNum.value);
  let randomness = Math.ceil(Math.random() * numRange);
  let inputNumber = parseInt(inNum.value);
  outPut(inputNumber, randomness);
}

inNumForm.addEventListener("submit", generateNum);

function outPut(inputNumber, randomness) {
  if (inputNumber === randomness) {
    result.innerText = `You chose: ${inputNumber}, the machine chose ${randomness}`;
    answer.innerText = `You Won!`;
  } else {
    result.innerText = `You chose: ${inputNumber}, the machine chose ${randomness}`;
    answer.innerText = `You Lost!`;
  }
}
