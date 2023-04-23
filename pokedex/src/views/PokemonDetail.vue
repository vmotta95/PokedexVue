<template>
  <div class="about">
    <TheHeaderVue/>
    <img alt="Vue logo" src="../assets/logo.png">
    <PokemonDetails/>
    <TheFooterVue/>

  </div>
</template>
<script>
import TheHeaderVue from '@/components/TheHeader.vue'
import PokemonDetails from '@/components/PokemonDetails.vue';
import TheFooterVue from '@/components/TheFooter.vue';

export default {
  name: 'HomeView',
  components: {
    TheHeaderVue,
    PokemonDetails,
    TheFooterVue
  }
}
</script>