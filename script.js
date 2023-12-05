document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const descriptionTitle = document.querySelector("#description h2");
  const descriptionText = document.querySelector("#dogDescription");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });

    // Atualizar o conteúdo da descrição com base no slide atual
    const currentCaption = slides[index].querySelector(".slide-caption");
    descriptionTitle.textContent = currentCaption.querySelector("h2").textContent;
    descriptionText.textContent = currentCaption.querySelector("p").textContent;

    // Alterar a cor de fundo com base na cor do slide atual
    const bgColor = currentCaption.parentElement.dataset.bgColor || "#ffffff";
    document.body.style.backgroundColor = bgColor;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Iniciar a mudança de slide e cor automaticamente
  setInterval(nextSlide, 5000); // Altera o slide a cada 5 segundos (5000 milissegundos)
});
