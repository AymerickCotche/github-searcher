// == Import
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as _ from 'lodash';
import './styles.scss';

import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import Cards from 'src/components/Cards';
import logo from './logo-github.png';
import { Results } from '../../type';

// == Composant
const App = () => {
  const results = {
    total_count: 50,
    items: [
      { id: 10, name: 'lol', full_name: 'lolfull' },
      { id: 20, name: 'mdr', full_name: 'mdrfull' },
    ],
  };
  const [inputSearch, setInputSearch] = useState('');
  const [search, setSearch] = useState('');
  const [resultsApi, setResultsApi] = useState({
    items: [],
    total_count: 0,
  });

  const getDatas = async (userSearch: string) => {
    console.log(userSearch);
    try {
      const datas = await axios.get(
        `https://api.github.com/search/repositories?q=${userSearch}`,
      );
      setResultsApi(datas.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (search !== '') getDatas(search);
  }, [search]);

  const { items, total_count } = resultsApi;

  return (
    <div className="app">
      <img src={logo} className="app__logo" alt="logo github" />
      <SearchBar
        inputValue={inputSearch}
        onChangeInputValue={setInputSearch}
        setSearch={setSearch}
      />
      <Message counter={total_count} />
      <Cards repos={items} />
    </div>
  );
};

// == Export
export default App;
