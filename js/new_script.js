const main = document.querySelector('main');
let html = '';

for ( let i = 0; i < characters.length; i++) {
  let character = characters[i];
  html += ` 
    <h2>${character.name}</h2>
	<h3>${character.element}</h3>
    <img src="${character.image}" alt="${character.name}">
  `;
}

main.insertAdjacentHTML('beforeend', html);