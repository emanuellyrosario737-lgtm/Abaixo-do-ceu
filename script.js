// =========================
// MOVIMENTO DAS ESTRELAS
// =========================

const stars = document.querySelector(".stars");

let targetX = 0;
let targetY = 0;

let currentX = 0;
let currentY = 0;


// =========================
// POSIÇÃO DO MOUSE
// =========================

function updatePointer(x, y) {

    targetX =
        (x / window.innerWidth - 0.5) * 12;

    targetY =
        (y / window.innerHeight - 0.5) * 12;

}


// Computador

document.addEventListener(
    "mousemove",
    (event) => {

        updatePointer(
            event.clientX,
            event.clientY
        );

    },
    { passive: true }
);


// Celular

document.addEventListener(
    "touchmove",
    (event) => {

        const touch = event.touches[0];

        if (!touch) return;

        updatePointer(
            touch.clientX,
            touch.clientY
        );

    },
    { passive: true }
);


// =========================
// MOVIMENTO SUAVE
// =========================

function animateStars() {

    currentX +=
        (targetX - currentX) * 0.04;

    currentY +=
        (targetY - currentY) * 0.04;


    if (stars) {

        stars.style.transform = `
            translate(
                ${currentX}px,
                ${currentY}px
            )
        `;

    }


    requestAnimationFrame(
        animateStars
    );

}


// =========================
// RESPEITAR REDUÇÃO DE MOVIMENTO
// =========================

const reducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


if (!reducedMotion) {

    animateStars();

}
