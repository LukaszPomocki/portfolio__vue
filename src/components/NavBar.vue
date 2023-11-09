<template>
    <nav>
        <div class="imie"><router-link to="/Home">Moje Portfolio</router-link></div>
        <div class="lista__menu">
                <ul>
                    <li><router-link to="/Home">Home</router-link></li>
                    <li><router-link to="/Omnie">O mnie</router-link></li>
                    <li><router-link to="/Projekty">Projekty</router-link></li>
                    <li><router-link to="/Kontakt">Kontakt</router-link></li>
                    <li><a href="https://lukaszpomocki.github.io/Projekty/Landing-Page/CV__%C5%81ukasz__Pomocki.pdf" class="Lista-CV">CV</a></li>
                </ul>
                <button @click="pokazNav"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="NavBar__Icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
</button>
        </div>
        <div v-if="pokaz" class="Nav__PopUp">
            <ul>
                <li><router-link to="/Home">Home</router-link></li>
                <li><router-link to="/Omnie">O mnie</router-link></li>
                <li><router-link to="/Projekty">Projekty</router-link></li>
                <li><router-link to="/Kontakt">Kontakt</router-link></li>
                <li><a href="https://lukaszpomocki.github.io/Projekty/Landing-Page/CV__%C5%81ukasz__Pomocki.pdf" class="Lista-CV">CV</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>

export default {
data(){
    return{
        pokaz: true
    }
},
methods: {
    pokazNav(){
        this.pokaz = !this.pokaz
    }
}
}
</script>

<style>
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

nav{
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
}

.imie{
    height: auto;
    font-size: var(--rozmiar-4xl);
    color: var(--czcionka-kolor);
    display: flex;
    align-items: center;
    justify-content: left;
}

.imie a{
    margin-left: 0.5rem;
    font-weight: bold;
}

.lista__menu{
    height: auto;
    color: var(--tekst-kolor);
    display: flex;
    align-items: center;
    justify-content: right;
}

ul{
    display: flex;
    align-items: center;
    padding: 0;
    font-size: var(--rozmiar-2xl);
    gap: 1em;
    list-style-type: none;
    margin-right: 0.5rem;
}

.Lista-CV{
    background-color: var(--glowny-color);
    border: 1px solid var(--akcent-kolor);
    padding: 1em;
    color: var(--akcent-kolor);
}

li{
    display: flex;
    align-items: center;
    justify-content: right;
    cursor: pointer;
}

a{
    text-decoration: none;
    color: var(--tekst-kolor);
}

a:hover{
    color: var(--akcent-kolor);
}
/* Button */
nav button{
    border: 0;
    margin: 0.5rem;
    background-color: var(--glowny-color);
    display: none;
    position: relative;
}
.NavBar__Icon{
    height: var(--rozmiar-4xl);
    width: var(--rozmiar-4xl);
    color: var(--czcionka-kolor);
}

.Nav__PopUp{
    position: absolute;
    top: 10%;
    left: 60%;
    background-color: var(--glowny-color);
    border: 1px solid var(--czcionka-kolor);
    border-radius: var(--rozmiar-xxs);
}

.Nav__PopUp ul{
    flex-direction: column;
    margin: 10px;
}


@media (max-width: 640px){

    .lista__menu ul{
        display: none;
    }
    nav button{
        height: var(--rozmiar-5xl);
        width: var(--rozmiar-5xl);
        display: block;
    }

}

@media (max-width: 768px) {
    .imie{
        font-size: var(--rozmiar-3xl);
    }
    .lista__menu ul{
        font-size: var(--rozmiar-lg);
    }
}

</style>