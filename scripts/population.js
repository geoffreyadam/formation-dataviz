console.log('Good luck space cowboy !');

fetch(
  'https://raw.githubusercontent.com/iOiurson/formation-dataviz/master/data/population.json',
)
  .then(resp => resp.json())
  .then(data => console.log('DATA', data));
