// 1.
const jedi = {
    nombre: "Luke Skywalker", 
    edad: 19
};

// Tu código para cambiar la edad aquí... 

jedi.edad = 25;

// 2. 
const princesa = {
    nombre: "Leia",
    apellido: "Organa",
    edad: 20
}

console.log(`Soy ${princesa.nombre} ${princesa.apellido}, tengo ${princesa.edad} años y soy una princesa de Alderaan`);

// 3.
const sable1 = {
    nombre: "Shoto de Yoda", 
    precio: 1500
};

const sable2 = {
    nombre: "Sable de Darth Vader",
    precio: 2000
};

// Tu código para calcular el precio total aquí...

let total = sable1.precio + sable2.precio;

console.log("El precio total es: "+ total + "€");

// 4.
let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable
precioBaseGlobal = 25000;

const nave1 = {
    nombre: "Ala-X", 
    precioBase: 50000, 
    precioFinal: 60000
};

const nave2 = {
    nombre: "Halcón Milenario", 
    precioBase: 70000, 
    precioFinal: 80000
};

// Tu código para actualizar el precio final de cada nave aquí...
nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log(nave1.precioFinal);
console.log(nave2.precioFinal);

