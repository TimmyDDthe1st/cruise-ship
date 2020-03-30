const Itinerary = require('../src/itinerary');
let testItinerary;

beforeEach(() => {
    testItinerary = new Itinerary();
})

describe('constructor', () => {
    it('should create a new object', () => {
        expect( testItinerary ).toBeInstanceOf(Object);
    })

    it('should have a ports property', () => {
        expect( testItinerary.ports ).toEqual([]);
    })
})