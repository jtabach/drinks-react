import { useState, useEffect } from 'react';

const SearchInput = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <input 
        type="text"
        placeholder="Search by drink name or ingredients"
        value={searchTerm}
        onChange={handleChange} />
    </div>
  );
};

export default SearchInput;