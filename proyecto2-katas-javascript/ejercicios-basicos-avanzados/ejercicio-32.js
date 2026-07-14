const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMen) {
    let oldestMember = null;
    let oldestYear = Infinity; // "Truco" para que en la primera iteración ya sea true y seleccione 1974 en oldestYear

    for (const member of xMen) {
        if (member.year < oldestYear) {
            oldestYear = member.year;
            oldestMember = member
        }
    }

    return oldestMember;
}

console.log(findOldestXMen(xMen));