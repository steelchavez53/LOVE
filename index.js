// Pedir nombre y mostrarlo
var bienvenida = "Escribe tu hermoso nombre 💖✨: ";
var data = prompt(bienvenida);
document.getElementById("data").innerHTML = data ? ", " + data.toUpperCase() : "";

// Botones
const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');

// Acción del botón SI
yesBtn.addEventListener('click', function() {
    alert('Siempre supe que aceptarías 💕');
    location.href = 'https://www.youtube.com/watch?v=SmF4wY7U7QE&list=RDSmF4wY7U7QE&start_radio=1';
});

// Función para mover botón NO
function moverBoton() {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// PC: mouseover
noBtn.addEventListener('mouseover', moverBoton);

// Móvil: touchstart
noBtn.addEventListener('touchstart', moverBoton);
