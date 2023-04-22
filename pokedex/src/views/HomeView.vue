<template>
  <div class="home">
    <TheHeaderVue/>
    <img alt="Vue logo" src="../assets/logo.png">
    
    <PokemonList/>
  </div>
</template>

<script>
// @ is an alias to /src
import PokemonList from '@/components/PokemonList.vue';
import TheHeaderVue from '@/components/TheHeader.vue'


export default {
  name: 'HomeView',
  components: {
    PokemonList,
    TheHeaderVue
  }
}
</script>
