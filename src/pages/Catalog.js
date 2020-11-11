import React from 'react';
import { useState, useEffect } from 'react';
import fakeApi from '../services/fakeApi';

import SearchInput from '../components/SearchInput';
import DrinkList from '../components/DrinkList';
import DrinkCategories from '../components/DrinkCategories';

import styles from './Catalog.module.css';

const Catalog = () => {
  const [drinks, setDrinks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectCategory, setSelectCategory] = useState('all');

  const getDrinksBySearch = (searchInput) => {
    const searchedDrinks = fakeApi.getDrinksBySearch(searchInput);
    console.log(searchedDrinks);
    setDrinks(searchedDrinks);
  }

  const getDrinksByCategory = (category) => {
    const categoryDrinks = fakeApi.getDrinksByCategory(category);
    const response = fakeApi.getDrinkIngredients();
    setSelectCategory(category);
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
      <h1 className={styles['title']}>Drink Catalog</h1>
      <SearchInput handleSearch={getDrinksBySearch} />
      <div className={styles['drinks-wrapper']}>
        <DrinkCategories categories={categories} selectCategory={selectCategory} handleCategorySelect={getDrinksByCategory} />
        <DrinkList drinks={drinks} />
      </div>
    </div>
  )
};

export default Catalog;
