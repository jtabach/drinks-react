import { useState, useEffect } from 'react';

import styles from './SearchInput.module.css';

const SearchInput = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const DEBOUNCE_TIME = 1000;

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
      () => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);

        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay]
    );

    return debouncedValue;
  }

  const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_TIME);

  useEffect(() => {
    console.log(debouncedSearchTerm);
    handleSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div className={styles['search']}>
      <input
        className={styles['input']}
        type="text"
        placeholder="Search by drink name"
        value={searchTerm}
        onChange={handleChange} />
    </div>
  );
};

export default SearchInput;