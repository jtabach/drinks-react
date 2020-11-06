import React from 'react';
import { useState, useEffect } from 'react';
import fakeApi from '../services/fakeApi';

import SearchInput from '../components/SearchInput';
import DrinkCategories from '../components/DrinkCategories';

const Catalog = () => {
  const [drinks, setDrinks] = useState([]);
  const [categories, setCategories] = useState([]);

  const getDrinksBySearch = (searchInput) => {
    const searchedDrinks = fakeApi.getDrinksBySearch(searchInput);
    setDrinks(searchedDrinks);
  }

  useEffect(() => {
    const response = fakeApi.getDrinks();
    const respCategories = fakeApi.getDrinkCategories();
    setDrinks(response);
    setCategories(respCategories);
  }, []);

  return (
    <div>
    <h1>Catalog</h1>
    <SearchInput handleSearch={getDrinksBySearch} />
    {drinks && drinks[0] ? <p>{drinks[0].strDrink}</p> : null}
    <DrinkCategories categories={categories} />
    </div>
  )
};

export default Catalog;
