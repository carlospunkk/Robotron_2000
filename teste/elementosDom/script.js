/*
// mostrando ação do clique no meu console
const btn = document.querySelector('#calcular')

btn.addEventListener('click', () => {

  console.log('fui clicado')
})
*/


// mostrando ação do clique na minha pagina html
const btn = document.querySelector('#calcular')
const resultado = document.querySelector(".resultado")
btn.addEventListener('click', () => {
  resultado.innerHTML = 'fui clicado'

})


