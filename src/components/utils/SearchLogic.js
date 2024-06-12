import { data as whiskeyData } from '../data/whiskeys';
import { cognacBrandyData } from '../data/cognac';
import { vodkaData } from '../data/vodka';
import { tequilaData } from '../data/tequila';
import { ginData } from '../data/gin';
import { wineData } from '../data/wine';

const getDataByCategory = (category) => {
  switch (category) {
    case 'whiskey':
      return whiskeyData.whiskeyData;
    case 'cognac&brandy':
      return cognacBrandyData.cognacBrandyData;
    case 'vodka':
      return vodkaData.vodkaData;
    case 'tequila':
      return tequilaData.tequilaData;
    case 'gin':
      return ginData.ginData;
    case 'wine':
      return wineData.wineData;
    default:
      return [];
  }
};

export const handleSearch = (term, setSearchResults) => {
  const lowerCaseTerm = term.toLowerCase();
  const allCategories = [
    'whiskey',
    'cognac&brandy',
    'vodka',
    'tequila',
    'gin',
    'wine',
  ];

  const exactMatches = [];
  const partialMatches = [];

  allCategories.forEach((category) => {
    const categoryData = getDataByCategory(category);

    categoryData.forEach((item) => {
      if (item.name.toLowerCase() === lowerCaseTerm) {
        exactMatches.push({ ...item, category });
      } else if (item.name.toLowerCase().includes(lowerCaseTerm)) {
        partialMatches.push({ ...item, category });
      }
    });
  });

  const results = [...exactMatches, ...partialMatches];
  setSearchResults(results);
};