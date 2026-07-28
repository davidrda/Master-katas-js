// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
(() => {
	const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
	const ul = document.createElement("ul");
	document.querySelector("body").appendChild(ul);

	for (const country of countries) {
		const li = document.createElement("li");
		li.textContent = country;
		ul.appendChild(li);
	}
})();

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
(() => {
	const element = document.querySelector(".fn-remove-me");
	element.remove();
})();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
(() => {
	const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
	const ul = document.createElement("ul");
	document.querySelector('[data-function="printHere"]').appendChild(ul);

	for (const car of cars) {
		const li = document.createElement("li");
		li.textContent = car;
		ul.appendChild(li);
	}
})();

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
(() => {
	const countries = [
		{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
		{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
		{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
		{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
		{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
	];

	for (const country of countries) {
		const div = document.createElement("div");
		const h4 = document.createElement("h4");
		const img = document.createElement("img")

		h4.textContent = country.title;
		img.src = country.imgUrl;
		img.alt = country.title;

		div.appendChild(h4);
		div.appendChild(img);
		document.querySelector("body").appendChild(div);
	}
})();

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
(() => {
	const button = document.createElement("button");
	document.querySelector("body").appendChild(button);
	button.textContent = "Eliminar";

	
	function handleClick(event) {
		const divs = document.querySelectorAll("div");
		const ultimoDiv = divs[divs.length - 1];
		ultimoDiv.remove();
	}
	button.addEventListener("click", handleClick);
})();

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
(() => {
	const divs = document.querySelectorAll("div:not(:last-of-type)");

	for (const div of divs) {
		const button = document.createElement("button");
		button.textContent = "Eliminar";

		button.addEventListener("click", () => {
			div.remove();
		})
		div.appendChild(button);

	}
})();