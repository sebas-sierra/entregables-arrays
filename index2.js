class Fecha {
    constructor(estadio, hora, local, visitante, golesA, golesB,) {
        this.partidoEstadio = estadio;
        this.partidoHora = hora;
        this.equipoLocal = local;
        this.equipoVisitante = visitante;
        this.golesLocal = golesA; //parseInt(prompt("Ingresa goles del equipo A"));
        this.golesVisitante = golesB; //parseInt(prompt("Ingresa goles del equipo B"));
        //this.ganador = ganador;
        //this.perdedor = perdedor;
        //this.empate = empate;
        //this.pronostico = 
    }
    pronostico(){
        console.log("Tu pronostico para este resultado es Equipo local: " + this.golesLocal + " Equipo visitante: " + this.golesVisitante,);
    }
    /*resultado(golesA, golesB){
        for (let i = 0; i <= 4; i++) {
                    
            if (golesA > golesB) {
                //this.resultado = "gana equipo1"
                alert("gana equipo1");
            } else if (golesA < golesB) {
                //this.resultado = "gana equipo 2"
                alert("gana equipo2");
            } else {
                //this.resultado = "partido empatado"
                alert("partido empatado")
            }
        } 
    }*/
}
//crea un array vacio que se llama campeonato
const campeonato = [];
//campeonato.push(new Fecha("Estadio-1", "16.20Hs" , "EquipoA", "EquipoB",));
//campeonato.push(new Fecha("Estadio-2", "18.15Hs" , "EquipoC", "EquipoD",));
//campeonato.push(new Fecha("Estadio-3", "19.50Hs" , "EquipoE", "EquipoF",));
//campeonato.push(new Fecha("Estadio-4", "13.30Hs" , "EquipoG", "EquipoH",));
//campeonato.push(new Fecha("Estadio-5", "16.00Hs" , "EquipoI", "EquipoJ",));

//se declara una variable vacia
let nuevoPronostico = 0;

//funcion para agregar un objeto al array vacio
function agregarPronostico(campeonato){
    //se pide por prompt los goles para equipo local y visitante
    let golesA = prompt("ingrese goles para el equipo local");
    let golesB = prompt("ingrese goles para el equipo visitante");
    
    //se definen los valores del nuevo objeto
    nuevoPronostico = new Fecha("Estadio-1", "16.20Hs" , "EquipoA", "EquipoB", golesA, golesB,);
    campeonato.push(nuevoPronostico);

    //se anuncia por consola que un nuevo pronostico ha sido agregado
    console.log("se agrego el pronostico ", nuevoPronostico);
}

//se pide que se ingresen cuatro pronosticos nuevos, llamando a la funcion agregarPronostico
for (let index = 0; index < 4; index++) {
    agregarPronostico(campeonato);

    //se pasan los objetos del array campeonato por el metodo pronostico
    nuevoPronostico.pronostico();

    //se comparan los valores indicados como goles de cada equipo y aviso por alert el ponostico del partido
    if (nuevoPronostico.golesLocal > nuevoPronostico.golesVisitante) {
        alert("gana equipo local: ");
    } else if (nuevoPronostico.golesLocal < nuevoPronostico.golesVisitante) {
        alert("gana equipo visitante");
    } else {
        alert("partido empatado")
    }
}
