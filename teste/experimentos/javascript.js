const controle = document.querySelectorAll('.quantidade-ajuste')
const braco = document.querySelector('#braco')


controle.forEach((elemento) => {
  elemento.addEventListener('click', (evento) => {
    console.log(evento.target.textContent)
    if (elemento.textContent === '-') {
      braco.value = parseInt(braco.value)
      console.log("subtraido com sucesso")
    } else {
      console.log('adicionado com sucesso')
    }
  })
})

