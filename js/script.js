const milissegundosPomodoro = 4000 //25*60*1000 = 1500000 = 25 minutos
const start = document.querySelector('#start')
let milissegundosRestantes = milissegundosPomodoro - 1000
let contador

start.addEventListener('click', () => {
    console.log("disparado com sucesso")

    console.log("restam", (milissegundosPomodoro / 1000))

    contador = setInterval('contadorDeSegundos()', 1000)
})

function contadorDeSegundos() {

    if (milissegundosRestantes == 0) {
        console.log("Tricolor")
        alert("Seu tempo acabou, vá descansar !")

        clearInterval(contador)
    } else {
        console.log("restam", (milissegundosRestantes / 1000))
    }

    milissegundosRestantes -= 1000
}


