//in progress -nicole

'use strict';

function createCharacter(name, nickName, race, origin, attack, defense) {
  return {
    name,
    nickName,
    race,
    origin,
    attack,
    defense,
    describe: () => console.log(`${name} is a ${race} from ${origin}.`),
    evaluateFight: (x,y) => console.log(`Your opponent takes ${x} damage and you receive ${y} damage`)
  };
}

const gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
gandalf.describe();

const bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'hobbit', 'The Shire', 2, 1);
bilbo.describe();

const attackDiff = gandalf.attack - bilbo.attack;
let defenseDiff = gandalf.defense - bilbo.defense;
if (attackDiff < defenseDiff){
  defenseDiff = 0;
}
gandalf.evaluateFight(attackDiff,defenseDiff);