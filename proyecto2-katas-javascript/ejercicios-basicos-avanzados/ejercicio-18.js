const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

function printPlaces(list){

    for (let i = list.length - 1; i >= 0; i--) {
        let place = list[i];
        if (place.id === 11 ||  place.id === 40) {
            list.splice(i, 1);
        }
    }
    console.log(list);
}

printPlaces(placesToTravel);