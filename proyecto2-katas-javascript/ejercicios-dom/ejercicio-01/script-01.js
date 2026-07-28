const boton = document.querySelector(".showme");
console.log(boton);

const h1 = document.querySelector("#pillado");
console.log(h1);

const parrafos = document.querySelectorAll("p");
parrafos.forEach(p => console.log(p));

const pokemons = document.querySelectorAll(".pokemon");
pokemons.forEach(po => console.log(po));

const dataFunctions = document.querySelectorAll('[data-function="testMe"]');
dataFunctions.forEach(df => console.log(df));

const rick = document.querySelectorAll('[data-function="testMe"]');
console.log(rick[2]);