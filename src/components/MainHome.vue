<template>
    <main>
        <div class="tresc">
            <p class="naglowek">Cześć, nazywam się</p>
            <h1>Łukasz Pomocki.</h1>
            <h2>Zbudowałem tą stronę i chciałbym zbudować ich więcej.</h2>
            <span>Jestem początkującym w budowaniu stron internetowych.<br>
            Nigdy nie pracowałem komercyjnie w tej dziedzinie. <br>
            Moim celem jest znalezienie pracy aby powiększyć swój zasób umiejętności w tym temacie. <br></span>
        </div>
    </main>
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

main{
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
}

.tresc{
    height: auto;
    width: 80%;
    color: var(--czcionka-kolor);
    }
    
.naglowek{
    color: var(--akcent-kolor);
    font-size: var(--rozmiar-4xl);
}

h1{
    font-size: var(--rozmiar-5xl);
}

h2{
    font-size: var(--rozmiar-4xl);
}

span{
    color: var(--tekst-kolor);
    font-size: var(--rozmiar-2xl);
}
</style>