/**
 * Asynchronous Testing.
 * When running async tests, always execute .assertions method
 * to verify the assertions are being tested.
 * 
 * Used Star wars API:
 * https://swapi.py4e.com/api/people/
 */
const fetch = require('node-fetch');
const swapi = require('./script2.js');

it('calls swapi promise get people with done', (done) => {
  // Make sure a number of assertions are executed
  expect.assertions(1);
  swapi.getPeople(fetch).then(data => {
    expect(data.count).toBe(87);
    done();
  });
});

it('calls swapi promise get people by returning the promise', () => {
  return swapi.getPeople(fetch).then(data => {
    expect(data.count).toBe(87);
    expect(data.results.length).toBeGreaterThan(5);
    expect(data.results.length).toEqual(10);
  });
});

