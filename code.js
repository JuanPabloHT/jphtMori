const body = document.body;
const frase = document.getElementById('frase');
const descripcion = document.getElementById('descripcion');

const colorFondo = ['#E8DFF5', '#FCE1E4', '#FCF4DD', '#DDEDEA', '#DAEAF6'];
const colorFrase = ['#9A7D0A', '#641E16', '#4A235A', '#154360', '#1C2833'];
const colorDescripcion = ['#9A7D0A', '#641E16', '#4A235A', '#154360', '#1C2833'];

document.getElementById('color1').addEventListener('click', () => {
    const colorAleatorio = colorFondo[Math.floor(Math.random() * colorFondo.length)];
    body.style.backgroundColor = colorAleatorio;
});

document.getElementById('color2').addEventListener('click', () => {
    const colorAleatorio = colorFrase[Math.floor(Math.random() * colorFrase.length)];
    frase.style.color = colorAleatorio;
});

document.getElementById('color3').addEventListener('click', () => {
    const colorAleatorio = colorDescripcion[Math.floor(Math.random() * colorDescripcion.length)];
    descripcion.style.color = colorAleatorio;
});
