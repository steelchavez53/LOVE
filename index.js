var bienvenida = "Escribe tu hermoso nombre 💖✨: ";
var data = prompt(bienvenida);

//Imprimir el nombre de la persona y transformarlo a mayúsculas
document.getElementById("data").innerHTML = data.toUpperCase();

const yesBtn = document.querySelector('#yesBtn');

//ESCRIBIR LO QUE PASARÁ EN CASO DE QUE SÍ
yesBtn.addEventListener('click', function(){
    alert('Siempre supe que aceptarías 💕'); 
    location.href = 'https://www.youtube.com/watch?v=SmF4wY7U7QE&list=RDSmF4wY7U7QE&start_radio=1';
});

const noBtn = document.querySelector('#noBtn');

// ✅ Función para mover aleatoriamente el botón
function moverBoton() {
    const randomX = Math.random() * 80; // Bajé a 80% para evitar que salga fuera de pantalla
    const randomY = Math.random() * 80;

    noBtn.style.top = randomY + "%";
    noBtn.style.left = randomX + "%";
    noBtn.style.transform = `translate(-${randomX}%, -${randomY}%)`;
}

// ✅ PC: cuando pases el mouse
noBtn.addEventListener('mouseover', moverBoton);

// ✅ MÓVIL: cuando intente tocarlo
noBtn.addEventListener('touchstart', moverBoton);
