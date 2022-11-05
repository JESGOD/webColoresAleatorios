const colores = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn_generarColores = document.getElementById("btn_generarColores");
const colorSpam = document.getElementById("idspamColor");
const mainContenedor = document.getElementById("contenedorMain");
let numeroAleatorio;
btn_generarColores.addEventListener('click', generarColores);

function generarColores() {

    numeroAleatorio = generarNumeroAleatorio();
    console.log(numeroAleatorio);
    mainContenedor.style.backgroundColor = colores[numeroAleatorio];
    colorSpam.innerText = colores[numeroAleatorio];
    
}

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * colores.length); /*math.floor redonde a un numero entero por debaj (1.6=1), se multiplica math.ramdom por*/
    /*un mumero ya que de no hacerlo siempre dara un decimal por debajo de 1 (0.1) por lo tanto al redondear siempre dara 0 */
}