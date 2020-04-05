const Port = require('../src/port');
const Ship = require('../src/ship');
const Itinerary = require('../src/itinerary');

let testPort;

beforeEach(() => {
    testPort = new Port('Lisbon');
    testPort.ships = [];
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

        testPort.addShip(ship);

        expect(testPort.ships).toEqual([ship, ship])
    })

    it('should do nothing if no ship is passed in', () => {
        testPort.addShip();

        expect(testPort.ships).toEqual([])
    })
    
    it('should do nothing if an integer is passed in', () => {
        testPort.addShip(5);

        expect(testPort.ships).toEqual([])
    })

    it('should do nothing if a string is passed in', () => {
        testPort.addShip('blahblah');

        expect(testPort.ships).toEqual([])
    })
})

describe('removeShip', () => {
    it('should remove a ship to the port', () => {
        testPort.removeShip();

        expect(testPort.ships).toEqual([])
    })
})