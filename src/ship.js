class Ship {
    constructor(startingPort) {
        this.currentPort = startingPort.name;
        this.passengerCount = 0;
    }

    setSail() {
        this.currentPort = '';
    }

    dock(port) {
        if(port === undefined){
            return this.currentPort = 'Out at sea';
        }
        
        this.currentPort = port.name   
    }

}

module.exports = Ship;