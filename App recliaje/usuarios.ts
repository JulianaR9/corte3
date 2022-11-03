interface Usuario {
    Nombre:string,
    Dirección:string,
    Telefono:string,
    Dia:string,
    Hora:string,
  
}

let usuario1: Usuario =
{
    Nombre:"Ana Rodriguez",
    Dirección:"Calle 50 A sur 28-46",
    Telefono: "Tres uno uno dos cinco seis siete tres nueve dos",
    Dia:"Viernes",
    Hora:"4:30 pm",
}


interface Usuario {
    Nombre:string,
    Dirección:string,
    Telefono:string,
    Dia:string,
    Hora:string,
  
}

let usuario2: Usuario =
{
    Nombre:"David Ruiz",
    Dirección:"Calle 53 sur 34-80",
    Telefono: "Tres dos cero cuatro seis ocho nueve siete dos uno",
    Dia:"Lunes",
    Hora:"6:30 pm",
}

console.log(usuario1,usuario2);