/* Fighter class definition */
const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }
  fight(opponent) {
    let damage = Math.ceil(Math.random() * this.strength);
    let damageTaken = damage - opponent.dexterity;
    if (damageTaken > 0) {
      opponent.life -= damageTaken;
    }
  }
  isAlive() {
    if (this.life > 0) {
      return true;
    }
  }
}

module.exports = Fighter;
