const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

let testItinerary;
let testShip;
let marseilles;
let nice;
let genoa;
let livorno;

beforeEach(() => {
    marseilles = new Port('Marseilles');
    nice = new Port('Nice');
    genoa = new Port('Genoa')
    livorno = new Port('Livorno');
    testItinerary = new Itinerary([marseilles, nice, genoa, livorno]);
    testShip = new Ship(testItinerary);
});

describe('constructor', () => {
    it('should create a new object', () => {
        expect( testShip ).toBeInstanceOf( Object );
    })

    it('should have a previousPort property of null', () => {
        expect( testShip.previousPort ).toBe( null );
    })

    it('should have a currentPort property of marseilles port object', () => {
        expect( testShip.currentPort ).toEqual(marseilles);
    })

    it('currentPort ships should contain this ship on instantiation', () => {
        expect( testShip.currentPort.ships ).toEqual([testShip]);
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
        testShip.setSail();

        expect( testShip.previousPort ).toBe(marseilles);
        expect(testShip.currentPort).toBeFalsy();
    })
})

describe('dock', () => {
    it('should be able to dock at a different port', () => {
        testShip.setSail();
        testShip.dock();

        expect(testShip.currentPort).toEqual(nice);
        expect(testShip.currentPort.ships).toEqual([testShip]);
    })
})