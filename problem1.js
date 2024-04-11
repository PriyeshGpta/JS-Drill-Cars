const inventory = require('./inventory');

function findCarById(inventory, id) {
    for (let car of inventory) {
        if (car.id === id) {
            return car;
        }
    }
    return null;
}

const car33 = findCarById(inventory, 33);

module.exports = findCarById;
