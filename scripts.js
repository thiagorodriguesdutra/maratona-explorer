const questionElement = document.querySelector(".question");
const answerElement = document.querySelector(".answer");
const divElement = document.querySelector("#interaction");
const inputElement = document.querySelector("input");
const button = document.querySelector("button");
const inputValue = inputElement.value;

const answers = [
  "Não entendi, seja mais claro",
  "Sim!",
  "Talvez?",
  "Não sou capaz de opinar",
  "Com certeza!",
  "Se concentre, pergunte novamente",
  "Não sou obrigado a responder",
];


function askAQuestion() {

  if(inputElement.value === "") {
    inputElement.classList.add("required");
    inputElement.setCustomValidity('Ops, você esqueceu de fazer a pergunta!')
    return
  };

  event.preventDefault();
  inputElement.classList.remove("required");
  divElement.classList.remove("hide");
  questionElement.innerText = inputValue;
  answerElement.innerText = answers[Math.floor(Math.random() * answers.length)];
  inputElement.value = "";
  setTimeout(() => {
    divElement.classList.add("hide");
  }, 1500);
}

button.addEventListener("click", askAQuestion);
