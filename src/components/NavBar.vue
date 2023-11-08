<template>
    <nav>
        <div class="imie"><a href="Index.html">Moje Portfolio</a></div>
        <div class="lista-menu">
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/MainOmnie">O mnie</router-link></li>
                    <li><a href="Projekty.html">Projekty</a></li>
                    <li><a href="Kontakt.html">Kontakt</a></li>
                    <li><a href="https://lukaszpomocki.github.io/Projekty/Landing-Page/CV__%C5%81ukasz__Pomocki.pdf" class="Lista-CV">CV</a></li>
                </ul>
        </div>
    </nav>
</template>

<script>

export default {

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
}

.imie{
    height: auto;
    width: 30%;
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

.lista-menu{
    height: auto;
    width: 70%;
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
</style>