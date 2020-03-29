const Ship = require('../src/ship');
const Port = require('../src/port');
let testShip;
let testPort;

beforeEach(() => {
    testPort = new Port('Lisbon');
    testShip = new Ship(testPort);
});

describe('constructor', () => {
    it('should create a new object', () => {
        expect( testShip ).toBeInstanceOf( Object );
    })

    it('should have a currentPort property of Lisbon', () => {
        expect( testShip.currentPort ).toBe( testPort.name );
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
})

describe('dock', () => {
    it('should set currentPort to docked port name of "Marseilles"', () => {
        testPort.name = 'Marseilles'

        testShip.dock(testPort);

        expect( testShip.currentPort ).toBe( 'Marseilles' );
    })

    it('should set currentPort to "Out at sea" when no port object passed', () => {
        testShip.dock();

        expect( testShip.currentPort ).toBe( 'Out at sea' );
    })
})