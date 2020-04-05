class Ship {
    constructor(itinerary) {
        this.itinerary = itinerary;
        this.previousPort = null;
        this.currentPort = itinerary.ports[0];
        this.passengerCount = 0;
        this.itinerary.ports[0].addShip(this);
    }

    setSail() {
        const itinerary = this.itinerary;
        const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

        itinerary.ports[currentPortIndex].removeShip();
        this.previousPort = this.currentPort;
        this.currentPort = null;
    }

    dock() {
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
      
        this.currentPort = itinerary.ports[previousPortIndex + 1];
        this.currentPort.addShip(this);
    }

}

module.exports = Ship;