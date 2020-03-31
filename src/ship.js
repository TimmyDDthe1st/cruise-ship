class Ship {
    constructor(itinerary) {
        this.itinerary = itinerary;
        this.previousPort = null;
        this.currentPort = itinerary.ports[0];
        this.passengerCount = 0;
    }

    setSail() {
        this.previousPort = this.currentPort;
        this.currentPort = null;
    }

    dock() {
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
      
        this.currentPort = itinerary.ports[previousPortIndex + 1];
    }

}

module.exports = Ship;