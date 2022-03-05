// == Import
import * as React from 'react';
import './styles.scss';

type MyProps = {
  inputValue: string;
  onChangeInputValue: Function;
  setSearch: Function;
  setSortBy: Function;
  setOrderBy: Function;
  orderByValue: string;
  setResultsNb: Function;
};
// == Composant
const SearchBar = ({
  inputValue, onChangeInputValue, setSearch, setSortBy, setOrderBy, orderByValue, setResultsNb,
}: MyProps) => {
  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    onChangeInputValue(event.currentTarget.value);
  };
  const handleEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setSearch(inputValue);
      setResultsNb(9);
    }
  };
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };
  const handleRadioBtn = (event: React.FormEvent<HTMLInputElement>) => {
    setOrderBy(event.currentTarget.value);
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
      <div className="search__conf">
        <label htmlFor="sort-select" className="search__conf__select__label">Sort by:
          <select name="sortby" className="search__conf__select__options" id="sort-select" onChange={handleSelect}>
            <option value="created">Created</option>
            <option value="stars">Stars</option>
            <option value="name">Name</option>
          </select>
        </label>
        <label htmlFor="desc">
          <input
            type="radio"
            className="search__conf__radio"
            id="desc"
            name="orderBy"
            value="desc"
            onChange={handleRadioBtn}
            checked={orderByValue === 'desc'}
          />
          Descendent
        </label>
        <label htmlFor="asc">
          <input
            type="radio"
            className="search__conf__radio"
            id="asc"
            name="orderBy"
            value="asc"
            onChange={handleRadioBtn}
            checked={orderByValue === 'asc'}
          />
          Ascendent
        </label>
      </div>
    </div>
  );
};

// == Export
export default SearchBar;
