class Ship {
    constructor(startingPort) {
        this.currentPort = startingPort.name;
        this.passengerCount = 0;
    }

    setSail() {
        this.currentPort = '';
    }

    dock(port) {
        if(port === undefined || !port instanceof Object){
            return this.currentPort = '';
        }
        
        this.currentPort = port.name;
    }

}

module.exports = Ship;