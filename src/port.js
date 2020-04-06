class Port {
    constructor(name) {
        this.name = name || 'Unknown Port';
        this.ships = [];
    }

    addShip(ship) {
        this.ships.push(ship);
    }

    removeShip() {
        this.ships.pop();
    }
}

module.exports = Port;