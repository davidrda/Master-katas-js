const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {

    for (const key in capitals) {
        if (key === country){
            const countryFound = capitals[key];
            return countryFound;
        }
    }
    return null;

}

const result = getCapital("Spain");

if(result === null){
    console.log(`Pais no encontrado`);
} else {
    console.log(result);
}
