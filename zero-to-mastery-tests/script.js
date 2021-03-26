/**
 * Basic Tests.
 */
const googleDatabase = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'myfavouritecats.com',
  'myfavouritecats2.com',
];

const googleSearch = (search, db) => {
  const matches = db.filter(url => url.includes(search));
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(googleSearch('cat', googleDatabase));

module.exports = googleSearch;