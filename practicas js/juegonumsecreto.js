let numeroMaximoPosible = 200;
let numeroSecreto = Math.floor(Math.random() *numeroMaximoPosible) +1;
let intentos = 1;
let numeroUsuario = 0;
let numeroIntentosPosibles = 5;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Ingrese un numero entre 1 - ${numeroMaximoPosible}`));
    console.log(numeroSecreto);
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste,el número es: ${numeroSecreto} Lo hiciste en ${intentos} ${ intentos == 1 ? 'intento' : 'intentos'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta//
        intentos ++;
        if(intentos > `${numeroIntentosPosibles}`){
            alert("Llegaste al máximo de intentos");
            break;
        }
    }

}