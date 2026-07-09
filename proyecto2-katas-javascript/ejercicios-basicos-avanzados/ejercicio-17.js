const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

function printAlien(object){
    for (const key in object) {
        console.log("La propiedad " + key + " tiene como valor: " + object[key]);
    }
}

printAlien(alien);