const milissegundosPomodoro = 70000 //25*60*1000 = 1500000 = 25 minutos
const start = document.querySelector('#start')
const cronometro = document.querySelector('#cronometro')
let milissegundosRestantes = milissegundosPomodoro - 1000
let contador

start.addEventListener('click', () => {
    console.log("disparado com sucesso")

    console.log("restam", (milissegundosPomodoro / 1000))

    contador = setInterval('contadorDeSegundos()', 1000)
})

function contadorDeSegundos() {

    if (milissegundosRestantes == 0) {
        cronometro.textContent = "00:00"
        console.log("Seu tempo acabou, vá descansar !")

        clearInterval(contador)
    } else {
        cronometro.textContent = formatadorDoTempo(milissegundosRestantes / 1000)
    }

    milissegundosRestantes -= 1000
}

function formatadorDoTempo(tempo) {
    const minutos = Math.floor(tempo / 60)
    const segundos = tempo % 60
    return (minutos.toString().padStart(2, '0') + ":" + segundos.toString().padStart(2, '0'))
}

function pause() {
    clearInterval(contadorDeSegundos())
}