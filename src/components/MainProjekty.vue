<template>
   <main>
        <div class="main__projekt">
            <div class="main__karta">
                <a href="../Projekt1/Index.html" target="_blank"><img src="../assets/Strona1.png"></a>
                <div class="main__tekst">
                    <h2>Strona sklepu zoologicznego</h2>
                        <p>Strona dalej w trakcie budowy</p>
                </div>
            </div>
        </div>
                    
        <div class="main__projekt">
            <div class="main__karta">
                <a href="../Projekt2/Index.html" target="_blank"><img src="../assets/Strona2.png"></a>
                 <div class="main__tekst">
                    <h2>Strona sklepu elektronicznego</h2>
                        <p>Ukończony projekt</p>
                </div>
            </div>
        </div>
                    
        <div class="main__projekt">
            <div class="main__karta">
                <a href="../Projekt3/Index.html" target="_blank"><img src="../assets/Strona3.png"></a>
                <div class="main__tekst">
                    <h2>Strona szkolna</h2>
                    <p>Ukończony projekt</p>
                </div>
            </div>
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
    align-items: center;
    flex-direction: column;
}
.main__projekt{
  height: auto;
  width: 80%;
  margin: 2rem;
}

.main__karta{
  padding: 5px;
  border-radius: 1rem;
  background-color: white;
}

.main__tekst{

}

img{
    width: 100%;
    height: auto;
    border-radius: var(--rozmiar-xxs);
}
</style>