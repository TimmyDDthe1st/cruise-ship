const Port = require('../src/port');
const Ship = require('../src/ship');
const Itinerary = require('../src/itinerary');

let testPort;

beforeEach(() => {
    testPort = new Port('Lisbon');
})

describe('constructor', () => {
    it('should create a new object', () => {
        expect( testPort ).toBeInstanceOf(Object);
    })

    it('should have a name', () => {
        expect( testPort.name ).toBeTruthy();
    })

    it('should have a name of "Unknown Port" when not specified', () => {
        const unknownPort = new Port();
        
        expect( unknownPort.name ).toBe( 'Unknown Port' );
    })

    it('should have a ships property set to an empty array', () => {
        expect(testPort.ships).toEqual([]);
    })
})

describe('addShip', () => {
    it('should add a ship to the port', () => {
        const itinerary = new Itinerary([testPort]);
        const ship = new Ship(itinerary);

        ship.dock();

        expect(testPort.ships).toEqual([])
    })
})