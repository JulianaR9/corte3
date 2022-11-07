 import { elemento } from "./elemento"
 
 export interface Usuario {
    Nombre:string,
    Dirección:string,
    Telefono:string,
    Dia:string,
    Hora:string,
    Elementos:elemento
  
}

let usuario1: Usuario =
{
    Nombre:"Ana Rodriguez",
    Dirección:"Calle 50 A sur 28-46",
    Telefono: "Tres uno uno dos cinco seis siete tres nueve dos",
    Dia:"Viernes",
    Hora:"4:30 pm",
    Elementos:{
        Nombre:"Plastico",
        Cantidad_kg:1,

        Nombre2:"Metal",
        Cantidad2_kg:2
    }  
}

let usuario2: Usuario =
{
    Nombre:"David Ruiz",
    Dirección:"Calle 53 sur 34-80",
    Telefono: "Tres dos cero cuatro seis ocho nueve siete dos uno",
    Dia:"Lunes",
    Hora:"6:30 pm",
    Elementos:{
        Nombre:"Papel",
        Cantidad_kg:3,

        Nombre2:"Vidrio",
        Cantidad2_kg:2
    }  
}

let usuario3: Usuario =
{
    Nombre:"Daniel Malaver",
    Dirección:"Carrera 38 sur 53-51",
    Telefono: "tres uno cero seis cinco cuatro cuatro ocho ocho dos",
    Dia:"Miércoles",
    Hora:"2:30 pm",
    Elementos:{
        Nombre:"Electronicos",
        Cantidad_kg:2,

        Nombre2:"Metal",
        Cantidad2_kg:3
    }  
}

let usuario4: Usuario =
{
    Nombre:"Isabel Martínez",
    Dirección:"Calle 50 B sur 36-24",
    Telefono: "tres cero cero dos nueve ocho siete cinco cinco cuatro ",
    Dia:"Viernes",
    Hora:"11:30 am",
    Elementos:{
        Nombre:"Plastico",
        Cantidad_kg:4,

        Nombre2:"Vidrio",
        Cantidad2_kg:2
    }  
}

let usuario5: Usuario =
{
    Nombre:"Joaquín Rozo",
    Dirección:"Carrera 35 sur 50-36",
    Telefono: "tres uno dos cinco siete cinco nueve dos uno seis",
    Dia:"Martes",
    Hora:"6:30 pm",
    Elementos:{
        Nombre:"Papel",
        Cantidad_kg:6,

        Nombre2:"Plastico",
        Cantidad2_kg:4
    }  
}

let usuario6: Usuario =
{
    Nombre:"Antonia Garzón",
    Dirección:"Carrera 36 A sur 52-08",
    Telefono: "tres uno uno cinco nueve siete tres dos cuatro cuatro",
    Dia:"Miércoles",
    Hora:"10:00 am",
    Elementos:{
        Nombre:"Metal",
        Cantidad_kg:3,

        Nombre2:"Vidrio",
        Cantidad2_kg:2
    }  
}

let usuario7: Usuario =
{
    Nombre:"Esteban Santana",
    Dirección:"Calle 49 B sur 35-46",
    Telefono: "tres uno tres cuatro dos ocho cinco seis seis uno",
    Dia:"Jueves",
    Hora:"7:00 pm",
    Elementos:{
        Nombre:"Plastico",
        Cantidad_kg:4,

        Nombre2:"Electronicos",
        Cantidad2_kg:2
    }  
}

let usuario8: Usuario =
{
    Nombre:"Jeronimo Callejas",
    Dirección:"Calle 50 sur 34-64",
    Telefono: "tres uno cuatro seis dos cero ocho cero uno dos",
    Dia:"Lunes",
    Hora:"2:30 pm",
    Elementos:{
        Nombre:"Vidrio",
        Cantidad_kg:6,

        Nombre2:"Papel",
        Cantidad2_kg:4
    }  
}

let usuario9: Usuario =
{
    Nombre:"Alejandra Molina",
    Dirección:"Calle 56 sur 33-67",
    Telefono: "tres dos cero dos cuatro ocho ocho cinco uno tres",
    Dia:"Viernes",
    Hora:"11:30 am",
    Elementos:{
        Nombre:"Plastico",
        Cantidad_kg:4,

        Nombre2:"Papel",
        Cantidad2_kg:4
    }  
}

let usuario10: Usuario =
{
    Nombre:"Andrea Velez",
    Dirección:"Carrera 52 sur 38-40",
    Telefono: "tres uno dos nueve seis nueve tres dos cuatro ocho",
    Dia:"Martes",
    Hora:"10:00 am",
    Elementos:{
        Nombre:"Electronicos",
        Cantidad_kg:2,

        Nombre2:"Metal",
        Cantidad2_kg:6
    }  
}

let usuario11: Usuario =
{
    Nombre:"Martin Gutiérrez",
    Dirección:"Calle 52 G sur 35-40",
    Telefono: "tres uno cero dos ocho ocho cuatro seis dos ocho",
    Dia:"Jueves",
    Hora:"6:30 pm",
    Elementos:{
        Nombre:"Papel",
        Cantidad_kg:6,

        Nombre2:"Vidrio",
        Cantidad2_kg:2
    }  
}

let usuario12: Usuario =
{
    Nombre:"Rocio Quintero",
    Dirección:"Calle 55 sur 34-84",
    Telefono: "tres uno tres nueve cero cuatro cinco ocho tres seis",
    Dia:"Miércoles",
    Hora:"2:30 pm",
    Elementos:{
        Nombre:"Metal",
        Cantidad_kg:8,

        Nombre2:"Papel",
        Cantidad2_kg:4
    }  
}

let usuario13: Usuario =
{
    Nombre:"Federico Zamora",
    Dirección:"Diagonal 56 bis sur 36-76",
    Telefono: "tres uno uno cuatro cinco cero uno tres siete seis",
    Dia:"Viernes",
    Hora:"6:30 pm",
    Elementos:{
        Nombre:"Vidrio",
        Cantidad_kg:4,

        Nombre2:"Metal",
        Cantidad2_kg:6
    }  
}

let usuario14: Usuario =
{
    Nombre:"Lucia Palacios",
    Dirección:"Calle 50 A sur 35-32",
    Telefono: "tres uno cero cinco siete cero tres cinco cuatro dos",
    Dia:"Martes",
    Hora:"4:30 pm",
    Elementos:{
        Nombre:"Plastico",
        Cantidad_kg:3,

        Nombre2:"Papel",
        Cantidad2_kg:6
    }  
}

let usuario15: Usuario =
{
    Nombre:"Pablo Gómez",
    Dirección:"Carrera 37 sur 50-37",
    Telefono: "tres dos cero cuatro cuatro ocho nueve dos tres cuatro",
    Dia:"Martes",
    Hora:"6:30 pm",
    Elementos:{
        Nombre:"Papel",
        Cantidad_kg:4,

        Nombre2:"Electronicos",
        Cantidad2_kg:4
    }  
}











console.log(usuario1,usuario2,usuario3,usuario4,usuario5,usuario6,usuario7,usuario8,usuario9,usuario10,usuario11,usuario12,usuario13,usuario14,usuario15);