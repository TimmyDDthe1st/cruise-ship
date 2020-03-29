class Ship {
    constructor() {
        this.startingPort = 'Lisbon';
        this.passengerCount = 0;
    }

    boardPassenger() {
        this.passengerCount += 1;
    }
}

module.exports = Ship;