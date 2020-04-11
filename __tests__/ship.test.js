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
    const port = {
        addShip: jest.fn(),
        removeShip: jest.fn()
    };

    marseilles = {
        ...port,
        name: 'Marseilles',
        ships: []
    };

    nice = {
        ...port,
        name: 'Nice',
        ships:[]
    };

    testItinerary = new Itinerary([marseilles, nice]);
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

    it('should have a starting passengerCount property of 0', () => {
        expect( testShip.passengerCount ).toBe( 0 );
    })

    it('should be added to the first port on instantiation', () => {
        expect(marseilles.addShip).toHaveBeenCalledWith(testShip);
    })
})

describe('setSail', () => {
    it('should set currentPort to falsey when sailing', () => {
        testShip.setSail();

        expect( testShip.currentPort ).toBeFalsy();
    })

    it('should set previousPort to currentPort and currentPort to "" when sailing', () => {
        testShip.setSail();

        expect(testShip.currentPort).toBeFalsy();
        expect( testShip.previousPort.removeShip ).toHaveBeenCalledWith(testShip);
    })
})

describe('dock', () => {
    it('should be able to dock at a different port', () => {
        const itinerary = new Itinerary([marseilles, nice]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toEqual(nice);
        expect(ship.currentPort.addShip).toHaveBeenCalledWith(ship);
    })
})