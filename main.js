const robotron = document.getElementById('robotron')




// minha lista dos controles 
const controle = document.querySelectorAll('[data-controle]')

// lista das estatisticas
const estatisticas = document.querySelectorAll('[data-estatistica]')
//console.log(estatisticas)
// objetos estatisticos
const pecas = {
  "bracos": {
    "forca": 29,
    "poder": 35,
    "energia": -21,
    "velocidade": -5
  },
  "blindagem": {
    "forca": 41,
    "poder": 20,
    "energia": 0,
    "velocidade": -20
  },
  "nucleos": {
    "forca": 0,
    "poder": 7,
    "energia": 48,
    "velocidade": -4
  },
  "pernas": {
    "forca": 27,
    "poder": 21,
    "energia": -32,
    "velocidade": 43
  },
  "foguetes": {
    "forca": 0,
    "poder": 20,
    "energia": -7,
    "velocidade": 5
  },

}



// textContent = texto
// Value = Numero
//utilizando o ForEach para percorrer os elementos e colocando um evento de click
controle.forEach((elemento) => {
  elemento.addEventListener('click', (evento) => {
    //operacao             // controle
    ManipulaDados(evento.target.dataset.controle, evento.target.parentNode)//pega tag (elemento), onde esta a tag e a(target) e o conteudo(textcontent)
    //console.log(elemento)
    //console.log(evento.target.parentNode) // para descobrir quem é o pai uso o parentNode

    //passando a minha peca como parâmetro para estatistica
    AtualizaEstastistica(evento.target.dataset.peca)

  })
})

function ManipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]")//só seleciona a classe controle pai 

  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1
  } else {
    peca.value = parseInt(peca.value) + 1
  }
}

//outra forma de fazer ManipulaDados
/*function Operacao() {
  somar.addEventListener('click', () => {
    braco.value = parseInt(braco.value) + 1
  })
  subtrair.addEventListener('click', () => {
    braco.value = parseInt(braco.value) - 1
  })
}
Operacao()*/

// função atualiza estatistica 
function AtualizaEstastistica(peca) {
  //console.log(pecas[peca])

  estatisticas.forEach((elemento) => {
    //console.log(elemento.textContent)
    //console.log(elemento.dataset.estatistica)                // adicionar no elemento 
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]


  })
}







