import drinks from './drinks.json';
import utils from './utils';

const fakeApi = {
  getDrinks() {
    return utils.formatDrinksData(drinks);
  },

  getDrinkCategories() {
    const categories = [];

    drinks.forEach(drink => {
      if (!categories.includes(drink.strCategory)) {
        categories.push(drink.strCategory)
      }
    });

    return categories;
  },

  getDrinksByCategory(category) {
    if (category === 'all') {
      return drinks;
    }

    const filteredDrinks = drinks.filter(drink => {
      return category === drink.strCategory;
    });

    return utils.formatDrinksData(filteredDrinks);
  },

  // NOTE: if I wanted to search from a filtered drink set, I could pass
  // the drink set as a second argument and default to the complete drink set if no param is passed
  getDrinksBySearch(str) {
    const searchedDrinks = drinks.filter(drink => {
      return drink.strDrink.includes(str);
      // TODO also return drinks w/ string matching ingredient
    });

    return utils.formatDrinksData(searchedDrinks);
  }
};

export default fakeApi;

/* NOTES
* Pagination?
* Allowing more than one selected category at a time?
*/