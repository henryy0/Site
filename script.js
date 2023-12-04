document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
      changeBackgroundColor();
    }
  
    function changeBackgroundColor() {
      const colors = ["#ffcccb", "#aeeeee", "#ffd700"]; 
      document.body.style.backgroundColor = colors[currentSlide];
    }
  
    setInterval(nextSlide, 5000); 
  });
  