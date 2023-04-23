<template>
  <div class="about">
    <TheHeaderVue/>
    <img alt="Vue logo" src="../assets/logo.png">
    <PokemonDetails/>
  </div>
</template>

<script>
// @ is an alias to /src;
import TheHeaderVue from '@/components/TheHeader.vue'
import PokemonDetails from '@/components/PokemonDetails.vue';


export default {
  name: 'HomeView',
  components: {
    TheHeaderVue,
    PokemonDetails
  }
}
</script>