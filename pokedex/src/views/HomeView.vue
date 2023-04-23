<template>
  <div class="home">
    <TheHeaderVue/>
    <nav>
  </nav>
    <img alt="Vue logo" src="../assets/logo.png">
    <PokemonList/>
    <TheFooterVue/>
  </div>
</template>

<script>
import PokemonList from '@/components/PokemonList.vue';
import TheHeaderVue from '@/components/TheHeader.vue'
import TheFooterVue from '@/components/TheFooter.vue';


export default {
  name: 'HomeView',
  components: {
    PokemonList,
    TheHeaderVue,
    TheFooterVue
  }
}
</script>
