const MAX_POKEMON = 151;
const API_URL = "https://pokeapi.co/api/v2/pokemon";

const img = document.querySelector(".random-image");

function generarNumeroAleatorio(numeroMaximo) {
  return Math.floor(Math.random() * numeroMaximo) + 1;
}

async function cargarPokemon() {
  try {
    const id = generarNumeroAleatorio(MAX_POKEMON);
    const url = `${API_URL}/${id}`;

    const respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const datos = await respuesta.json();

    img.src = datos.sprites.other?.dream_world?.front_default ?? datos.sprites.front_default;
    img.alt = datos.name;

  } catch (error) {
    console.error("Error, algo falló:", error.message);
  }
}

cargarPokemon();