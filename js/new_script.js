
function populateCoreSkylanders () {
  const main = document.querySelector('#core_skylanders');
  let html = '';
  
  for ( let i = 0; i < coreSkylanders.length; i++) {
    let character = coreSkylanders[i];
    html += ` 
      <div class='figure'>
      <h3>${character.name}</h3>
    <h4>${character.element}</h4>
      <img src="${character.image}" alt="${character.name}">
      </div>
    `;
  }
  
  main.insertAdjacentHTML('beforeend', html);
}

function populateInGameVariants () {
  const main = document.querySelector('#in-game_variants');
  let html = '';
  
  for ( let i = 0; i < inGameVariants.length; i++) {
    let character = inGameVariants[i];
    html += ` 
      <h3>${character.name}</h3>
    <h4>${character.element}</h4>
      <img src="${character.image}" alt="${character.name}">
    `;
  }
  
  main.insertAdjacentHTML('beforeend', html);
}

function populateMagicItems () {
  const main = document.querySelector('#magic_items');
  let html = '';
  
  for ( let i = 0; i < magicItems.length; i++) {
    let character = magicItems[i];
    html += ` 
      <h3>${character.name}</h3>
      <img src="${character.image}" alt="${character.name}">
    `;
  }
  
  main.insertAdjacentHTML('beforeend', html);
}



populateCoreSkylanders();
populateInGameVariants();
populateMagicItems();


