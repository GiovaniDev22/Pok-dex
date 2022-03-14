/*Quando cliclar no pokemon da listagem temos que esconder o cartão do pokemon
aberto e mostrar o cartão correspondente ao que foi selecionado

pra isso vamos precisar trabalhar com dois elementos 
1 - listagem
2 - cartão do pokemon



*/

const listaSelecaoPokemons = document.querySelectorAll(".pokemon")
const pokemonCard = document.querySelectorAll(".cartao-pokemon")


listaSelecaoPokemons.forEach(pokemon => {
    


    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokmonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokmonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokmonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})