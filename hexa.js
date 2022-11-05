const coloresHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn_generarColoresHex = document.getElementById("btn_generarColoresHex");
const colorSpamHex = document.getElementById("idspamColorHex");
const contenedorMainHex = document.getElementById("contenedorMainHex");
let colorHexa;
let numeroAleatorio2;
btn_generarColoresHex.addEventListener('click', generarColoresHex);
function generarColoresHex() {
    colorHexa = "#";
    for (let i = 0; i < coloresHex.length; i++) {
        numeroAleatorio2 = obtenerNumeroAleatorio();
        colorHexa += coloresHex[numeroAleatorio2];
        console.log(colorHexa);
        contenedorMainHex.style.background=colorHexa;
        colorSpamHex.innerText=colorHexa;
    }
    function obtenerNumeroAleatorio() {
        return Math.floor(Math.random() * coloresHex.length);
    }
}

