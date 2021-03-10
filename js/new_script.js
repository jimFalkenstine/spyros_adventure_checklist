const main = document.querySelector('#core_skylanders');
let html = '';

for ( let i = 0; i < coreSkylanders.length; i++) {
  let character = coreSkylanders[i];
  html += ` 
    <h3>${character.name}</h3>
	<h4>${character.element}</h4>
    <img src="${character.image}" alt="${character.name}">
  `;
}

main.insertAdjacentHTML('beforeend', html);