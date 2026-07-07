const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
    let accumulator = 0;
    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] === "number") {
            accumulator += list[i];
        } else {
            accumulator += list[i].length;
        }
    }

    const avg = accumulator / list.length;
    return avg;
}

const result = averageWord(mixedElements);
console.log(result);