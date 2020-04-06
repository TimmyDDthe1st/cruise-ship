const Port = require('../src/port');
const Ship = require('../src/ship');
const Itinerary = require('../src/itinerary');

let lisbon;
let testItinerary;
const testShip = jest.fn();

beforeEach(() => {
    lisbon = new Port('Lisbon');
    lisbon.removeShip();
})

describe('constructor', () => {
    it('should create a new object', () => {
        expect( lisbon ).toBeInstanceOf(Object);
    })

    it('should have a name', () => {
        expect( lisbon.name ).toBeTruthy();
    })

    it('should have a name of "Unknown Port" when not specified', () => {
        const unknownPort = new Port();

        expect( unknownPort.name ).toBe( 'Unknown Port' );
    })

    it('should have a ships property set to initial ship', () => {
        expect(lisbon.ships).toEqual([]);
    })
})

describe('addShip', () => {
    it('should add a ship to the port', () => {
        lisbon.addShip(testShip);
        
        expect(lisbon.ships).toEqual([testShip])
    })
})

describe('removeShip', () => {
    it('should remove a ship to the port', () => {
        lisbon.addShip(testShip);
        lisbon.removeShip();

        expect(lisbon.ships).toEqual([])
    })
})