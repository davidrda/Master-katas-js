fetch("https://thronesapi.com/api/v2/Characters")
.then(response => {

    if(!response.ok){
        throw new Error(`Error HTTP: ${response.status}`);
    }

    return response.json();

})
.then(characters => {

    const select = document.querySelector("#character-list");

    const img = document.querySelector(".character-image");

    img.src = characters[0].imageUrl;

    characters.forEach(character => {

        const option = document.createElement("option");
        option.value = character.id;
        option.textContent = character.fullName;
        select.appendChild(option);

    });

    select.addEventListener("change", (event) => {

        const id = Number(event.target.value);
        const personaje = characters.find(character => character.id === id);
        
        img.src = personaje.imageUrl;
        img.alt = personaje.fullName;

    })

})
.catch(error => console.error("Algo falló", error));