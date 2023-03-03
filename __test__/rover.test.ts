import { Rover } from '../src/rover';

describe('Mars Rover test', () => {
  it('should be instantiated', () => {
    const rover = new Rover();
    expect(rover).toBeTruthy()
  });
});
