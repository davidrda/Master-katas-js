const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const smallMovies = [];
const midMovies = [];
const bigMovies = [];

for (const movie of movies) {
    if(movie.durationInMinutes < 100){
        smallMovies.push(movie);
    } else if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200) {
        midMovies.push(movie);
    } else {
        bigMovies.push(movie);
    }
}

console.log("Películas cortas (<100 min):");
smallMovies.forEach(movie => {
  console.log(`- ${movie.name} (${movie.durationInMinutes} min)`);
});

console.log("\nPelículas medianas (100-200 min):");
midMovies.forEach(movie => {
  console.log(`- ${movie.name} (${movie.durationInMinutes} min)`);
});

console.log("\nPelículas largas (>200 min):");
bigMovies.forEach(movie => {
  console.log(`- ${movie.name} (${movie.durationInMinutes} min)`);
});
