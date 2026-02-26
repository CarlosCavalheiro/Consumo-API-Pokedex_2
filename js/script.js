const urlAPI = "https://pokeapi.co/api/v2/pokemon?limit=200&offset=0";

const listarPokemons = document.getElementById("listar-pokemons");

async function carregarPokemons() {
    try {
        const resposta = await fetch(urlAPI);
        const dados = await resposta.json();

        console.log(dados);

        dados.results.forEach(async (pokemon) => {
            const nome = pokemon.name;
            const respostaPokemon = await fetch(pokemon.url);
            const dadosPokemon = await respostaPokemon.json();
            
            //Dados completos de 1 pokemon
            console.log(dadosPokemon);

            const imagem = dadosPokemon.sprites.front_default;

            const pokemonDiv = document.createElement("div");
            const imagemPokemon = document.createElement("img");

            //Adicionar o nome do pokemon na div
            pokemonDiv.setAttribute("class","card text-dark bg-ligth mb-3 p-2");            

            imagemPokemon.setAttribute("src", imagem);
            imagemPokemon.setAttribute("class", "card-img-top");
            pokemonDiv.appendChild(imagemPokemon);
            pokemonDiv.appendChild(document.createTextNode(nome));

            //Adcinoar a div na lista de pokemons
            listarPokemons.appendChild(pokemonDiv);
        });

    } catch (error) {
        console.error("Erro ao carregar os pokemons: ", error);
    }
}

carregarPokemons();