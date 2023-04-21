<template>
  <TheHeader/>
  <img alt="Vue logo" src="./assets/logo.png">
  <PokemonList />
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import PokemonList from './components/PokemonList.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    PokemonList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
