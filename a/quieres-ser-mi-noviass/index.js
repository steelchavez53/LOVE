var bienvenida = "Escribe tu hermoso nombre 💖✨: ";
var data = prompt(bienvenida);

//Imprimir el nombre de la persona y transformalo a mayúsculas
document.getElementById("data").innerHTML = data.toUpperCase();

const yesBtn = document.querySelector('#yesBtn');

//ESCRIBIR LO QUE PASARA EN CASO DE QUE SÍ
yesBtn.addEventListener('click', function(){
    alert('Siempre supe que aceptarias'); //Puedes mandar los mensajes que quieras
    location.href = 'https://www.youtube.com/watch?v=0uZdFmbGGaU'; //Cambiar el URL en YouTube de la canción que quieras 
});

const noBtn = document.querySelector('#noBtn');

//NO MOVER NADA AQUÍ
noBtn.addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);

    noBtn.style.setProperty('top', randomY+'%');
    noBtn.style.setProperty('left', randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
});

