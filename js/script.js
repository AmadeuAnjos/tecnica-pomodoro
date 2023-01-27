const secPomodoro = 2000 //25*60*1000 = 1500000 = 25 minutos
const start = document.getElementById('start')

start.addEventListener('click', () => {
    console.log('disparado com sucesso')
    setTimeout(() => {
        console.log('Teste OK')
        alert('Seu tempo acabou, vá descansar !')
    }, secPomodoro);
})


