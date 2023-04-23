import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonDetail from '../views/PokemonDetail'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/details/:pokemonId",
    name: "details",
    component: PokemonDetail,
  },
    
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
