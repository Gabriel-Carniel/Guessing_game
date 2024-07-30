// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1


// Funções
function handleTryClick(event){ 
  event.preventDefault() // Não faça o padrão // -> seria enviar form e att pag

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) >= 0 && Number(inputNumber.value) <= 10){
    if(Number(inputNumber.value) == randomNumber) {
      //document.querySelector(".screen1").classList.add("hide")
      //document.querySelector(".screen2").classList.remove("hide")
      toogleScreen()
      document.querySelector(".screen2 h2").innerText = "Você acertou em " + xAttempts + " tentativas :)"
    }
  
    if(inputNumber.value != ""){
      xAttempts++;
    }
  }else{
    alert("Número inválido!")
  }

  inputNumber.value = ""
}

function handleResetClick() {
  //screen1.classList.remove("hide")
  //screen2.classList.add("hide")
  toogleScreen() // Mesma coisa que as funções acima, mas vai alternando automaticamente // Tira a classe "hide" se tiver e adiciona ela se não tiver
  xAttempts = 1
  inputNumber.value = ""
  randomNumber = Math.round(Math.random() * 10)
}

function toogleScreen () {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide") 
}



// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)  

document.addEventListener("keydown", function (e) {      // função como parâmetro
  if(e.key == "Enter" && screen1.classList.contains("hide")){
    handleResetClick()
  }
})
