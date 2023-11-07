<template>
  <NavBar></NavBar>
  <MainHome></MainHome>
</template>

<script>
import NavBar from '../src/components/NavBar.vue'
import MainHome from './components/MainHome.vue'

export default {
components: {NavBar, MainHome}
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

:root{
    /* Kolory */
    --glowny-color: rgb(66, 78, 97);
    --czcionka-kolor: rgb(255, 255, 255);
    --tekst-kolor: rgb(238, 238, 239);
    --akcent-kolor: rgb(106, 188, 243);

     /* rozmiary*/
    --rozmiar-xxs: 0.5rem;
    --rozmiar-xs: 0.75rem;
    --rozmiar-sm: 0.875rem;
    --rozmiar-base: 1rem;
    --rozmiar-lg: 1.125rem;
    --rozmiar-xl: 1.25rem;
    --rozmiar-2xl: 1.5rem;
    --rozmiar-3xl: 1.875rem;
    --rozmiar-4xl: 2.25rem;
    --rozmiar-5xl: 3rem;
}
</style>
