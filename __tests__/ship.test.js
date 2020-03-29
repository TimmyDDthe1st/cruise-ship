const Ship = require('../src/ship');
let testShip;

beforeEach(() => {
    testShip = new Ship();
});

describe('constructor', () => {
    it('should create a new object', () => {
        expect( testShip ).toBeInstanceOf(Object);
    })

    it('should have a startingPort property of Lisbon', () => {
        expect( testShip.currentPort ).toBe('Lisbon');
    })

    it('should have a starting passengerCount property of 0', () => {
        expect( testShip.passengerCount ).toBe(0);
    })
})

describe('setSail', () => {
    it('should set currentPort to falsey when sailing', () => {
        testShip.setSail();
        expect( testShip.currentPort ).toBeFalsy();
    })
})