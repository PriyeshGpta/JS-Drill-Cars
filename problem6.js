const inventory = require('./inventory');

function filterBMWAndAudi() {
    const filteredCars = [];
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].car_make === 'BMW' || inventory[i].car_make === 'Audi') {
            filteredCars.push(inventory[i]);
        }
    }
    return filteredCars;
}

module.exports = filterBMWAndAudi;
