function filterBMWAndAudi() {
    const filteredCars = [];
    const allowedMakes = ['BMW', 'Audi'];

    for (let i = 0; i < inventory.length; i++) {
        if (allowedMakes.includes(inventory[i].car_make)) {
            filteredCars.push(inventory[i]);
        }
    }
    return filteredCars;
}

module.exports = filterBMWAndAudi;
