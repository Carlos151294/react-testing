/**
 * Asynchronous Testing, Mocks and Spies.
 * When running async tests, always execute .assertions method
 * to verify the assertions are being tested.
 * 
 * Chech Docs:
 * https://jestjs.io/docs/mock-functions#mock-property
 * https://github.com/sapegin/jest-cheat-sheet#mock-functions
 * 
 * Used Star wars API:
 * https://swapi.py4e.com/api/people
 */
const fetch = require('node-fetch');
const swapi = require('./async-tests.js');

it('calls swapi promise getPeople with done callback', (done) => {
  // Make sure a number of assertions are executed
  expect.assertions(1);
  swapi.getPeople(fetch).then(data => {
    expect(data.count).toBe(87);
    done();
  });
});

it('calls swapi promise getPeople by returning the promise', () => {
  expect.assertions(2);
  return swapi.getPeople(fetch).then(data => {
    expect(data.count).toBe(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});

it('calls swapi promise getPeople with async/await syntax', async () => {
  const data = await swapi.getPeople(fetch)
  
  expect.assertions(3);
  expect(data.count).toBe(87);
  expect(data.results.length).toBeGreaterThan(5);
  expect(data.results.length).toEqual(10);
});

/**
 * All mock functions have this special .mock property, 
 * which is where data about how the function has been called and 
 * what the function returned is kept. 
 * 
 * Mock functions help us avoid running async code.
 * Mock also known as Spies.
 */
it('mocks \"fetch\" function and spies its usage inside getPeople', async () => {
  // Mock Return Values
  const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
    json: () => Promise.resolve({
      count: 87,
      results: [0, 1, 2, 4, 5]
    })
  }));

  expect.assertions(4);
  // Using a mock function
  const data = await swapi.getPeople(mockFetch);
  expect(mockFetch.mock.calls.length).toBe(1);
  // Custom Matcher
  expect(mockFetch).toBeCalledWith('https://swapi.py4e.com/api/people');
  expect(data.count).toEqual(87);
  expect(data.results.length).toBe(5);
});

