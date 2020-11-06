import React from 'react';
import { useState, useEffect } from 'react';
import fakeApi from '../services/fakeApi';

import SearchInput from '../components/SearchInput';
import DrinkList from '../components/DrinkList';
import DrinkCategories from '../components/DrinkCategories';

const Catalog = () => {
  const [drinks, setDrinks] = useState([]);
  const [categories, setCategories] = useState([]);

  const getDrinksBySearch = (searchInput) => {
    const searchedDrinks = fakeApi.getDrinksBySearch(searchInput);
    setDrinks(searchedDrinks);
  }

  const getDrinksByCategory = (category) => {
    const categoryDrinks = fakeApi.getDrinksByCategory(category);
    console.log(categoryDrinks)
    setDrinks(categoryDrinks);
  }

  useEffect(() => {
    const response = fakeApi.getDrinks();
    const respCategories = fakeApi.getDrinkCategories();
    setDrinks(response);
    setCategories(respCategories);
  }, []);

  return (
    <div className="container">
      <h1>Catalog</h1>
      <SearchInput handleSearch={getDrinksBySearch} />
      <DrinkList drinks={drinks} />
      <DrinkCategories categories={categories} handleCategorySelect={getDrinksByCategory} />
    </div>
  )
};

export default Catalog;
