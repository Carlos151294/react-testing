/**
 * Basic Tests.
 */
const googleSearch = require('./script');

dbMock = [
  'dog.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com',
];

describe('Google search', () => {
  it('is searching google', () => {
    expect(googleSearch('testtest', dbMock)).toEqual([]);
    expect(googleSearch('dog', dbMock)).toEqual([
      'dog.com',
      'dogpictures.com',
    ]);
  });
  
  it('works with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });
  
});

it('does not return more than three matches', () => {
  expect(googleSearch('.com', dbMock).length).toBe(3);
});