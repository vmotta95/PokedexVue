
  
   <template>
    <div class="container">
      <div class="row">
        <div v-for="pokemon in pokemons" :key="pokemon.id" class="col-lg-3 col-md-4 col-sm-6">
          <div :class="['card', { 'hovered': hoveredIndex === pokemon.id }]"
               @mouseover="hoveredIndex = pokemon.id"
               @mouseout="hoveredIndex = null"
               >
            <img :src="pokemon.image" class="pokemon-image" alt="Imagem do Pokémon" :class="'bg-' + pokemon.type[0]" />
            <div class="card-body">
              <p class="card-text">#{{ pokemon.id }}</p>
              <h5 class="card-title">{{ pokemon.name }}</h5>
              <p class="card-text">{{ pokemon.type.join(', ') }}</p>
              <button type="button" class="btn btn-primary"  @click="goToDetails(pokemon.id)">Detalhes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import axios from 'axios';

export default {
  name: 'PokemonList',
  data() {
    return {
      pokemons: [],
      hoveredIndex: null,
     
    }
  },
  created() {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
      .then(response => {
        const promises = response.data.results.map(result => {
          return axios.get(result.url);
        });
        Promise.all(promises)
          .then(responses => {
            this.pokemons = responses.map(response => {
              return {
                id: response.data.id,
                name: response.data.name.charAt(0).toUpperCase() + response.data.name.slice(1),
                type: response.data.types.map(t => t.type.name),
                image: response.data.sprites.front_default
              }
            })
          })
      })
      .catch(error => {
        console.log(error);
      });
        
  },
  methods: {
    goToDetails(pokemonId) {
      this.$router.push({ name: "details", params: { pokemonId: pokemonId } });
    },
  },
 
}
</script>
  
  <style scoped>
  

  .pokemon-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  
  .bg-grass {
    background-color: #48D0B0;
  }
  
  .bg-fire {
    background-color: #F08030;
  }
  
  .bg-water {
    background-color: #6890F0;
  }
  
  .bg-bug {
    background-color: #A8B820;
  }
  
  .bg-normal {
    background-color: #A8A878;
  }
  
  .bg-poison {
    background-color: #A040A0;
  }
  
  .card {
    margin: 10px;
    transition: transform .2s;
    transform: scale(1);
  }
  
  .card.hovered {
    transform: scale(1.05);
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  @media (max-width: 576px) {
    .card {
      flex-basis: calc(50% - 20px);
    }
  }
  
  @media (min-width: 577px) and (max-width: 768px) {
    .card {
      flex-basis: calc(33.33% - 20px);
    }
}
</style>