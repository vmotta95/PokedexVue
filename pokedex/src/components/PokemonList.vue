
  <template>
    <div class="container">
      <div class="row">
        <div v-for="pokemon in pokemons" :key="pokemon.id" class="col-lg-3 col-md-4 col-sm-6">
          <div class="card pokemon-card">
            <img :src="pokemon.image" class="pokemon-image" alt="Imagem do Pokémon" :class="'bg-' + pokemon.type[0]" />
            <div class="card-body">
              <p class="card-text">#{{ pokemon.id }}</p>
              <h5 class="card-title">{{ pokemon.name }}</h5>
              <p class="card-text">{{ pokemon.type.join(', ') }}</p>
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
        pokemons: []
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
                  name: response.data.name,
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
  }
  </script>
  
  <style scoped>
  .pokemon-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    background-color: #f1f1f1;
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
  
  @media (min-width: 769px) and (max-width: 992px) {
    .card {
      flex-basis: calc(25% - 20px);
    }
  }
  </style>
  