
function populateCoreSkylanders () {
  const main = document.querySelector('#core_skylanders');
  let html = '';
  
  for (let i = 0; i < coreSkylanders.length; i++) {
    let character = coreSkylanders[i];
    html += `  
        <div class = "figure" id="${character.name}_div"}>
          <img src="${character.image}" alt="${character.name}">
          <form>
            <input type="checkbox" id="${character.name}" name="${character.name}" value="${character.name}" onclick="myFunction(${character.index})">
            <label for="${character.name}">${character.name}</label>
          </form>
          <p class="figure_text" style="display:none">You have ${character.name}!</p>
        </div>
    `;
  }
  
  main.insertAdjacentHTML('beforeend', html);
}

function populateInGameVariants () {
  const main = document.querySelector('#in-game_variants');
  let html = '';
  
  for (let i = 0; i < inGameVariants.length; i++) {
    let character = inGameVariants[i];
    html += `
      <div class='figure'>
      <img src="${character.image}" alt="${character.name}">
      <form>
            <input type="checkbox" id="${character.name}" name="${character.name}" value="${character.name}" onclick="myFunction(${character.index})">
            <label for="${character.name}">${character.name}</label>
          </form>
          <p class="figure_text" style="display:none">You have ${character.name}!</p>
      </div>
    `;
  }
  
  main.insertAdjacentHTML('beforeend', html);
}

function populateMagicItems () {
  const main = document.querySelector('#magic_items');
  let html = '';
  
  for (let i = 0; i < magicItems.length; i++) {
    let character = magicItems[i];
    html += `
      <div class='figure'>
      <img src="${character.image}" alt="${character.name}">
      <form>
            <input type="checkbox" id="${character.name}" name="${character.name}" value="${character.name}" onclick="myFunction(${character.index})">
            <label for="${character.name}">${character.name}</label>
          </form>
          <p class="figure_text" style="display:none">You have ${character.name}!</p>
      </div>
    `;
  }
  
  main.insertAdjacentHTML('beforeend', html);
}

function myFunction (index) {
  const checkBox = document.querySelectorAll('input')[index];
  const text = document.querySelectorAll('.figure_text')[index];
  const figure = document.querySelectorAll('.figure')[index];

  if (checkBox.checked == true) {
    text.style.display = "block";
    figure.style.opacity= "1";
    figure.style.fontWeight = "bold";
  } else {
    text.style.display ="none";
    figure.style.opacity = "0.5";
    figure.style.fontWeight = "normal";
  }
}

populateCoreSkylanders();
populateInGameVariants();
populateMagicItems();