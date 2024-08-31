const DDay = document.querySelector("#DDay");

function find_day(){
  const target_day = new Date("2024-12-31");  //디데이 설정
  const today = new Date();
  
  diff_day = target_day - today;
  const day = Math.floor(diff_day / (1000*60*60*24));
  DDay.innerText = `D-${day}`;
}
find_day();
setInterval(find_day, 1000);

// 갤러리
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
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

