// Pequeno efeito de profundidade no fundo

document.addEventListener("mousemove", (event) => {

    const stars = document.querySelector(".stars");

    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;

    stars.style.transform = `
        translate(
            ${x * 10}px,
            ${y * 10}px
        )
    `;

});
