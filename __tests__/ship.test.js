const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

let testItinerary;
let testShip;
let lisbon;

beforeEach(() => {
    lisbon = new Port('Lisbon');
    testItinerary = new Itinerary([lisbon]);
    testShip = new Ship(testItinerary);
});

describe('constructor', () => {
    it('should create a new object', () => {
        expect( testShip ).toBeInstanceOf( Object );
    })

    it('should have a previousPort property of null', () => {
        expect( testShip.previousPort ).toBe( null );
    })

    it('should have a currentPort property of Lisbon', () => {
        expect( testShip.currentPort ).toEqual(lisbon);
    })

    it('should have a starting passengerCount property of 0', () => {
        expect( testShip.passengerCount ).toBe( 0 );
    })
})

describe('setSail', () => {
    it('should set currentPort to falsey when sailing', () => {
        testShip.setSail();

        expect( testShip.currentPort ).toBeFalsy();
    })

    it('should set previousPort to currentPort and currentPort to "" when sailing', () => {
        testShip.currentPort = 'Marseilles'

        testShip.setSail();

        expect( testShip.previousPort ).toBe('Marseilles');
        expect(testShip.currentPort).toBeFalsy();
    })
})

describe('dock', () => {
    it('should be able to dock at a different port', () => {
        const lisbon = new Port('Lisbon');
        const marseilles = new Port('Marseilles');
        const itinerary = new Itinerary([lisbon, marseilles]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toEqual(marseilles);
    })
})