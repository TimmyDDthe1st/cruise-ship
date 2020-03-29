class Ship {
    constructor() {
        this.currentPort = 'Lisbon';
        this.passengerCount = 0;
    }

    setSail() {
        this.currentPort = '';
    }

}

module.exports = Ship;