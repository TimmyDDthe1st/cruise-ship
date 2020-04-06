const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

let testItinerary;
let marseilles;
let nice;

beforeEach(() => {
    marseilles = new Port('Marseilles');
    nice = new Port('Nice');
    testItinerary = new Itinerary([marseilles, nice]);
})

describe('constructor', () => {
    it('should create a new object', () => {
        expect( testItinerary ).toBeInstanceOf(Object);
    })

    it('should have a ports property', () => {
        expect( testItinerary.ports ).toBeTruthy();
    })
})

describe('ports', () => {
    it('should have an array of port objects', () => {
        expect( testItinerary.ports ).toEqual([marseilles, nice]);
    })
})