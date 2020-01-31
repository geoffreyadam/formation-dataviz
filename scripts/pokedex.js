console.log("Gotta catch'em all !");

document.addEventListener('DOMContentLoaded', () => {
  fetch(
    'https://raw.githubusercontent.com/iOiurson/formation-dataviz/master/data/pokedex.json',
  )
    .then(resp => resp.json())
    .then(data => console.log('DATA', data));
});
