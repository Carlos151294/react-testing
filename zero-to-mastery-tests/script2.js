/**
 * Asynchronous Testing.
 * Used Star wars API:
 * https://swapi.py4e.com/api/people/
 */
const fetch = require('node-fetch');

const getPeople = async fetch => {
  const response = await fetch('https://swapi.py4e.com/api/people/');
  const data = await response.json();
  return { count: data.count, results: data.results };
};

// getPeople(fetch);

module.exports = { getPeople };