//Dado el siguiente array:
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

//4.1 - Saca a "Tendo" por consola atacando su posición.
const index = aldeanos.indexOf("Tendo");
console.log(aldeanos[index]);

//4.2 - Coloca en el último lugar de este array a "Cervasio".
aldeanos.push("Cervasio");

//4.3 - Cambia el primer elemento de este array por "Bambina".
aldeanos[0] = "Bambina";

//4.4 - Dale la vuelta a este array.
aldeanos.reverse();
console.log("Array revertido: " + aldeanos);

//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
const indice = aldeanos.indexOf("Narciso");
aldeanos.splice(indice, 1, "Canela")
console.log(aldeanos);

//4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
console.log(aldeanos[aldeanos.length - 1]);