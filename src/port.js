class Port {
    constructor(name) {
        this.name = name || 'Unknown Port';
        this.ships = [];
    }

    addShip(ship) {
        if(ship === null || ship === undefined) {
            return;
        }

        if(ship instanceof Object) {
            this.ships.push(ship);
        }
    }

    removeShip() {
        this.ships.pop();
    }

}

module.exports = Port;