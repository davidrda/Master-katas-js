function findArrayIndex(array, text) {
    // Devuelve la posición del array cuando el valor del array sea igual al valor del texto
    for (let i = 0; i < array.length; i++) {
        if (text === array[i]) {
            return i;
        }
    }
    return null;
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function removeItem(array, text) {
    const index = findArrayIndex(array, text);

    console.log(`El index de ${text} es: ${index}`);

    array.splice(index, 1);
    console.log(`Elemento eliminado`);

    console.log(array);
}

removeItem(mainCharacters, "Rey");