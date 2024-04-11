const filterBMWAndAudi = require('../problem6');
const inventory = require('../inventory');

const BMWAndAudi = filterBMWAndAudi(inventory);
console.log(JSON.stringify(BMWAndAudi));
