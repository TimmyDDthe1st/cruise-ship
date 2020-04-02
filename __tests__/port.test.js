const Port = require('../src/port');
let testPort;

beforeEach(() => {
    testPort = new Port();
})

describe('constructor', () => {
    it('should create a new object', () => {
        expect( testPort ).toBeInstanceOf(Object);
    })

    it('should have a name', () => {
        expect( testPort.name ).toBeTruthy();
    })

    it('should have a name of "Unknown Port" when not specified', () => {
        expect( testPort.name ).toBe( 'Unknown Port' );
    })
})
