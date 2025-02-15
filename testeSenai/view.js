document.addEventListener("DOMContentLoaded", function() {
    const texto = document.querySelector(".golpe-texto");
    const caveiras = document.querySelectorAll(".caveira");

    // Faz o texto aparecer
    setTimeout(() => {
        texto.classList.add("aparecer");

        // Depois de 1s, as caveiras começam a se mexer
        setTimeout(() => {
            caveiras.forEach(caveira => caveira.classList.add("mover"));
        }, 1000);
    }, 500);
});
