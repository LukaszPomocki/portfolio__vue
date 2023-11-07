<template>
    <nav>
        <div class="imie"><a href="Index.html">Moje Portfolio</a></div>
        <div class="lista-menu">
                <ul>
                    <li><a href="Index.html">Home</a></li>
                    <li><a href="Mnie.html">O mnie</a></li>
                    <li><a href="Projekty.html">Projekty</a></li>
                    <li><a href="Kontakt.html">Kontakt</a></li>
                    <li><a href="../assets/CV__Łukasz__Pomocki.pdf" class="Lista-CV">CV</a></li>
                </ul>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

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
    font-size: var(--rozmiar-xl);
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
    font-size: var(--rozmiar-xs);
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