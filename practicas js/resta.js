let valor1 = Math.floor(Math.random()*100);
let valor2 = Math.floor(Math.random()*100);
let resultado = 0;

if (valor1 > valor2) {
    resultado = valor1 - valor2;
} else {
    resultado = valor2 - valor1;
}

console.log('La diferencia  entre', valor1,'y', valor2, 'es igual a ', resultado);
