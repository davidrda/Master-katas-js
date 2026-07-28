// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div = document.createElement("div");
document.querySelector("body").appendChild(div);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div = document.createElement("div");
const p = document.createElement("p");
div.appendChild(p);
document.querySelector("body").appendChild(div);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
document.querySelector("body").innerHTML += '<div class="loop"></div>';

const contenedor = document.querySelector(".loop");

for (let i = 0; i < 6; i++) {
    const p = document.createElement("p");
    contenedor.appendChild(p);
}


// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
document.querySelector("body").innerHTML += "<p>Soy dinámico!</p>";


// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
document.querySelector(".fn-insert-here").innerHTML = 'Wubba Lubba dub dub';

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const lista = document.createElement("ul");
document.querySelector("body").appendChild(lista);

for (const app of apps) {
    const li = document.createElement("li");
    li.textContent = app;
    lista.appendChild(li);
}

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const nodos = document.querySelectorAll(".fn-remove-me");
nodos.forEach(nodo => nodo.remove());

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const divs = document.querySelectorAll("div");
const primerDiv = divs[0];

const p = document.createElement("p");
p.textContent = "Voy en medio!";

primerDiv.after(p);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const insertDivs = document.querySelectorAll("div.fn-insert-here");

for (const div of insertDivs) {
  const pa = document.createElement("p");
  pa.textContent = "Voy dentro!";
  div.appendChild(pa);
}