const h1 = document.querySelector('h1');
const primerNumero=document.getElementById("primer-numero");
const segundoNumero=document.getElementById("segundo-numero");
const botonSumar = document.getElementById("sumar");
const botonRestar = document.getElementById("restar");
const botonMultiplicar = document.getElementById("multiplicar");
const botonDividir = document.getElementById("dividir");
const pResultado = document.querySelector(".p-resultado");
const form = document.getElementById('form')



form.addEventListener('submit', sumarInput);

function sumarInput(event){
    console.log(event)
    event.preventDefault();
    let resultado;
    a = Number(primerNumero.value);
    b = Number(segundoNumero.value);
    resultado= a + b;
    pResultado.innerText = `Resultado: ${resultado}`;
}