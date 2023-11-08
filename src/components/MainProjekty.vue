<template>
   <main>
        <div class="main__slider__container">

        <div class="mySlides fade">
            <div class="main__karta">
                <a href="../Projekt1/Index.html" target="_blank"><img src="../assets/Strona1.png"></a>
                <div class="karta__tekst">
                    <h2>Strona sklepu zoologicznego</h2>
                        <p>Strona dalej w trakcie budowy</p>
                </div>
            </div>
        </div>
                    
        <div class="mySlides fade">
            <div class="main__karta">
                <a href="../Projekt2/Index.html" target="_blank"><img src="../assets/Strona2.png"></a>
                 <div class="karta__tekst">
                    <h2>Strona sklepu elektronicznego</h2>
                        <p>Ukończony projekt</p>
                </div>
            </div>
        </div>
                    
        <div class="mySlides fade">
            <div class="main__karta">
                <a href="../Projekt3/Index.html" target="_blank"><img src="../assets/Strona3.png"></a>
                <div class="karta__tekst">
                    <h2>Strona szkolna</h2>
                    <p>Ukończony projekt</p>
                </div>
            </div>
        </div>
                    
        <a class="prev" @click="plusSlides(-1)">❮</a>
        <a class="next" @click="plusSlides(1)">❯</a>
                    
        </div>
        <br>
                    
        <div class="div__dot">
            <span class="dot" @click="currentSlide(1)"></span> 
            <span class="dot" @click="currentSlide(2)"></span> 
            <span class="dot" @click="currentSlide(3)"></span> 
        </div>
    </main>
</template>

<script>
export default {}
/*
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
*/

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

.main__slider__container{
    max-width: 1000px;
    position: relative;

  }

  .main__karta{
    display: flex;
    flex-direction: column;
    padding: var(--rozmiar-xxs);
    border-radius: var(--rozmiar-xxs);
    background-color: var(--czcionka-kolor);
  }

  .karta__tekst{
    height: auto;
    width: 100%;
    text-align: center;
  }

  .div__dot{
    text-align: center;
  }
  
  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    background-color: var(--glowny-color);
    border-radius: 0 3px 3px 0;
    user-select: none;
  }
  
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }
  
  .prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
  }
  
  .text {
    color: #f2f2f2;
    font-size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
  }
  
  .numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
  }
  
  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }
  
  .active, .dot:hover {
    background-color: #717171;
  }
  
  .fade {
    animation-name: fade;
    animation-duration: 1.5s;
  }
  
  @keyframes fade {
    from {opacity: .4} 
    to {opacity: 1}
  }
  

img{
    width: 100%;
    height: auto;
    border-radius: var(--rozmiar-xxs);
}
</style>