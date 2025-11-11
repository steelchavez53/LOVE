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

function moverBoton() {
    const randomX = Math.random() * 80; // evita salirse de pantalla
    const randomY = Math.random() * 80;

    noBtn.style.top = randomY + '%';
    noBtn.style.left = randomX + '%';
    noBtn.style.transform = `translate(-${randomX}%, -${randomY}%)`;
}

// Para PC
noBtn.addEventListener('mouseover', moverBoton);
// Para móvil
noBtn.addEventListener('touchstart', moverBoton);
