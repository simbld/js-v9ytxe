// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require('./src/Fighter');

const Heracles = new Fighter('Heracles', 20, 6);
const Nemean = new Fighter('Nemean', 11, 13);

let round = 0;

while (Heracles.isAlive() && Nemean.isAlive()) {
  round++;
  Heracles.fight(Nemean);
  if (Nemean.isAlive()) {
    console.log(`🕛 ${round} : 🦁 est en vie avec ${Nemean.life} pv`);
    Nemean.fight(Heracles);
    if (Heracles.isAlive()) {
      console.log(`🕛 ${round} : 🧔 est en vie avec ${Heracles.life} pv`);
    } else {
      console.log('🧔 est mort');
      console.log(`🦁 gagne (${Nemean.life})`);
    }
  } else {
    console.log('🦁 est mort');
    console.log(`🧔 gagne (${Heracles.life})`);
  }
  console.log('-------------------------------');
}
