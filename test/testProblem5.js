const countCarsOlderThanYear = require('../problem5');
const inventory = require('../inventory');

const olderThan2000 = countCarsOlderThanYear(inventory, 2000);
console.log(`Number of cars older than 2000: ${olderThan2000}`);
