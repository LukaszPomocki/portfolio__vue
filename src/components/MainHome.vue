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
    font-size: var(--rozmiar-2xl);
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