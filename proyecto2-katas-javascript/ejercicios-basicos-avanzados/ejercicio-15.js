const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

function includeCamiseta (list, word) {
    for (let i = 0; i < list.length; i++) {
        const w = list[i];
        if (w.includes(word)) {
            console.log(w);
        }
    }
}

includeCamiseta(products, "Camiseta");