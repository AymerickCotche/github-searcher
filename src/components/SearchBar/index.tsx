// == Import
import * as React from 'react';
import './styles.scss';

type MyProps = {
  inputValue: string;
  onChangeInputValue: Function;
  setSearch: Function;
};
// == Composant
const SearchBar = ({ inputValue, onChangeInputValue, setSearch }: MyProps) => {
  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    onChangeInputValue(event.currentTarget.value);
  };
  const handleEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setSearch(inputValue);
    }
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
        value={inputValue}
        onKeyPress={handleEnter}
      />
    </div>
  );
};

// == Export
export default SearchBar;
