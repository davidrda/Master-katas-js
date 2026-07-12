const menores = [];
const mayores = [];

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

// En orden del array y según pide el ejercicio con un bucle y dos condicionales
for (const user of users) {
  if (user.years >= 18) {
    console.log("Usuarios mayores de edad: " + user.name);
  } else {
    console.log("Usuarios menores de edad: " + user.name);
  }
}

// Más ordenado a mi parecer
/*
    for (const user of users) {
        if(user.years >= 18){
            mayores.push(user); 
        } else {
            menores.push(user);
        }
    }

    for (const user of menores) {
        console.log("Usuarios menores de edad: " + user.name);
    }

    for (const user of mayores) {
        console.log("Usuarios mayores de edad: " + user.name);
    } 
*/