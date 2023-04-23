<template>
    <div id="card-details" class="container">
      <h2 class="text-center mb-4">Detalhes do Pokémon</h2>
      <div class="pokemon-undefined alert alert-danger" v-if="!pokemon.id">Não foi possível encontrar o Pokémon.</div>
      <div v-else>
        <div class="row">
          <div class="col-md-4">
            <img
              v-if="pokemon.sprites"
              :src="pokemon.sprites.front_default"
              alt="Pokemon Image"
              class="img-fluid"
            />
          </div>
          <div class="col-md-8">
            <h2 class="text-capitalize">{{ pokemon.name }}</h2>
            <div>
              <p>Altura: {{ pokemon.height }}m</p>
              <p>Peso: {{ pokemon.weight }}kg</p>
              <p>
                Tipos:
                {{
                  pokemon.types
                    ? pokemon.types.map((t) => t.type.name).join(", ")
                    : ""
                }}
              </p>
              <p>HP: {{ pokemon.stats[0].base_stat }}</p>
              <p>Ataque: {{ pokemon.stats[1].base_stat }}</p>
              <p>Defesa: {{ pokemon.stats[2].base_stat }}</p>
              <p>Ataque Especial: {{ pokemon.stats[3].base_stat }}</p>
              <p>Defesa Especial: {{ pokemon.stats[4].base_stat }}</p>
              <p>Velocidade: {{ pokemon.stats[5].base_stat }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from 'axios';

export default {
  name: "PokemonDetails",
  data() {
    return {
      pokemon: {},
    };
  },
  methods: {
    async fetchPokemonDetails(pokemonId) {
      try {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );
        this.pokemon = {
          id: data.id,
          name: data.name,
          sprites: data.sprites,
          height: data.height,
          weight: data.weight,
          types: data.types,
          stats: data.stats,
        };
      } catch (error) {
        console.error(error);
      }
    },
  },
  async created() {
    await this.fetchPokemonDetails(this.$route.params.pokemonId);
  },
};
</script>