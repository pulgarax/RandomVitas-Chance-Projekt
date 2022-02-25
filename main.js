import './style.css'
import Chance from "chance";


// Instantiate Chance so it can be used
const chance = new Chance();

const name = chance.first();
const email = chance.email();
const telefon = chance.phone();
const dedication = chance.profession();
const WhereIcomeFrom = chance.country()
const nonsense = chance.sentence();
const uno = chance.word();
const dos = chance.word();
const tres = chance.word();
const animalsong = chance.animal();

console.log(name);

document.querySelector('#app').innerHTML = `
<h1>Hello ${name}!</h1>
      <p>${email}</p>
      <p>${telefon}</p>
      
      <article>Hey my Name is ${name} and im a ${dedication}. I come from ${WhereIcomeFrom}.
      When I'm alone I speak my own language and say stuff like this:
      <p>" ${nonsense}"</p>.
      I am also a musician. I love to sing and this is the lyrics of my new song: "The ${animalsong}":

      <p>"I was walking along and I stepped on a ${uno}
      <p>I fell down in a colossal way!</p>
      <p> Who was the ${dos} who put this ${tres} in the way!"</p>
   
  `;
