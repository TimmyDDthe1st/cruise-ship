const Ship = require('../src/ship');
const Port = require('../src/port');
let testShip;
let lisbon;

beforeEach(() => {
    lisbon = new Port('Lisbon');
    testShip = new Ship(lisbon);
});

describe('constructor', () => {
    it('should create a new object', () => {
        expect( testShip ).toBeInstanceOf( Object );
    })

    it('should have a currentPort property of Lisbon', () => {
        expect( testShip.currentPort ).toBe( lisbon.name );
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
    it('should set currentPort to new port name of "Marseilles"', () => {
        testShip.currentPort = 'Lisbon';
        const marseilles = new Port('Marseilles');

        testShip.dock(marseilles);

        expect( testShip.currentPort ).toBe( 'Marseilles' );
    })

    it('should set currentPort to be falsy when no port object passed', () => {
        testShip.dock();

        expect( testShip.currentPort ).toBeFalsy();
    })
})