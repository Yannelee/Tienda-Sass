let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("novedades__items");
  let ventanaSize = window.innerWidth
  console.log(n);
  console.log(slideIndex);

  if (n > slides.length-1) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  if (ventanaSize <= 768){
    slides[slideIndex-1].style.display = "flex"; 
  } else if (ventanaSize <= 1200){
    slides[slideIndex-1].style.display = "flex"; 
    slides[slideIndex].style.display = "flex"; 
  } else{
    if (slideIndex < slides.length-1){
      slides[slideIndex-1].style.display = "flex"; 
      slides[slideIndex].style.display = "flex"; 
      slides[slideIndex+1].style.display = "flex";
    } else if (slideIndex >= slides.length-1) {
      slides[slideIndex-1].style.display = "flex"; 
      slides[slideIndex].style.display = "flex"; 
      slides[0].style.display = "flex";
    }
  }
}