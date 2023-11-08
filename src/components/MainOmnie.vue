<template>
   <main>
        <div class="tresc">
            <h3>Nazywam się Łukasz Pomocki.</h3>
            <p>Pochodzę ze Stargardu (Zachodniopomorskie), gdzie uczęszczałem do ZS2 im Mikołaja Kopernika.<br>
            To właśnie tam miałem pierwszą styczność z budowaniem stron internetowych.<br>
            Bardzo mi się to spodobało i chciałbym się doszkolić w tym temacie.<br>
            Umiem całkiem sporo, jednakże zdaję sobie sprawę, że aby wejść na wyższy poziom 
            muszę nabyć więcej wiedzy i doświadczenia.</p>
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

.tresc{
    height: auto;
    width: 80%;
    color: var(--czcionka-kolor);
}


h3{
    color: var(--akcent-kolor);
    font-size: var(--rozmiar-5xl);
}

p{
    font-size: var(--rozmiar-2xl);
}

</style>