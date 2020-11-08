import { useState, useEffect } from 'react';

import styles from './SearchInput.module.css';

const SearchInput = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

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