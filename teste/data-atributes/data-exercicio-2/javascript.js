
const tintasLista = document.querySelector('ul')

document.querySelector('#botao').addEventListener('click', () => {
  tintasLista.setAttribute('data-lista', 'mostrar')
})

document.querySelector(".close").addEventListener("click", () => {
  tintasLista.setAttribute('data-lista', 'esconder')
})
