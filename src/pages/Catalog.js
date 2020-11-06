import React from 'react';
import { useState, useEffect } from 'react';
import fakeApi from '../services/fakeApi';

const Catalog = () => {
  const [drinks, setDrinks] = useState(0);

  useEffect(() => {
    const response = fakeApi.getDrinks();
    console.log(response);
    setDrinks(response);
  }, [drinks]);

  return (
    <div>
    <h1>Catalog</h1>
    {drinks ? <p>{drinks[0].strDrink}</p> : null}
    </div>
  )
};

export default Catalog;
