<template>
  <NavBar></NavBar>
  <MainHome></MainHome>
</template>

<script>
import NavBar from '../src/components/NavBar.vue'
import MainHome from './components/MainHome.vue'
import MainKontakt from './components/MainKontakt.vue'
import MainOmnie from './components/MainOmnie.vue'
import MainProjekty from './components/MainProjekty.vue'


export default {
components: {NavBar, MainHome, MainKontakt, MainOmnie, MainProjekty}
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html, body{
    margin: 0;
    padding: 0;
    background-color: var(--glowny-color);
}
</style>
