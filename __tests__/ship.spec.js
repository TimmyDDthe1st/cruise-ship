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
        expect( testShip.startingPort ).toBe('Lisbon');
    })

    it('should have a starting passengerCount property of 0', () => {
        expect( testShip.passengerCount ).toBe(0);
    })
})

describe('boardPassengers', () => {
    it('should board a passenger, increasing passengerCount by 1', () => {
        testShip.boardPassenger();
        expect( testShip.passengerCount ).toBe( 1 );
        testShip.boardPassenger();
        testShip.boardPassenger();
        testShip.boardPassenger();
        testShip.boardPassenger();
        testShip.boardPassenger();
        testShip.boardPassenger();
        expect( testShip.passengerCount ).toBe( 7 );
    })
})