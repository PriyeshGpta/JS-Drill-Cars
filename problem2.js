const inventory = require('./inventory');

function getLastCar() {
    return inventory[inventory.length - 1];
}

module.exports = getLastCar;
