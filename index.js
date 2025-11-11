// Pedir nombre
var bienvenida = "Escribe tu hermoso nombre 💖✨: ";
var data = prompt(bienvenida);
document.getElementById("data").innerHTML = data ? data.toUpperCase() : "";

// Botón 'Sí'
const yesBtn = document.querySelector('#yesBtn');
yesBtn.addEventListener('click', function(){
    alert('¡Siempre supe que aceptarías! 💖');
    location.href = 'https://www.youtube.com/watch?v=SmF4wY7U7QE&list=RDSmF4wY7U7QE&start_radio=1';
});

// Botón 'No'
const noBtn = document.querySelector('#noBtn');
const container = document.querySelector('.container');

function moverBoton() {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const contWidth = container.clientWidth;
    const contHeight = container.clientHeight;

    // Calculamos posición aleatoria dentro del contenedor
    const maxX = contWidth - btnWidth;
    const maxY = contHeight - btnHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Para PC
noBtn.addEventListener('mouseover', moverBoton);
// Para móvil
noBtn.addEventListener('touchstart', moverBoton);
