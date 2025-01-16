const diaSemana = prompt("¿Que dia de la semana es?").toLowerCase();

/*Verificamos con operdor ternario si el dia es sabado o domingo indica que es fin de semana*/
const resultado = diaSemana == "sabado" || diaSemana == "domingo" ? "Es fin de semana" : "Buena semana";

alert(resultado);
