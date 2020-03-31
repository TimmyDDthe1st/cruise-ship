const Itinerary = require('../src/itinerary');
const Port = require('../src/port');
let testItinerary;

beforeEach(() => {
    testItinerary = new Itinerary();
})

describe('constructor', () => {
    it('should create a new object', () => {
        expect( testItinerary ).toBeInstanceOf(Object);
    })

    it('should have a ports property', () => {
        expect( testItinerary.ports ).toBeFalsy();
    })
})

describe('ports', () => {
    it('should have an array of port objects', () => {
        const marseilles = new Port('Marseilles');
        const nice = new Port('Nice');

        testItinerary.ports = [marseilles, nice];

        expect( testItinerary.ports ).toEqual([{name: 'Marseilles'}, {name: 'Nice'}]);
    })

    it('should have a ports property', () => {
        expect( testItinerary.ports ).toBeFalsy();
    })
})