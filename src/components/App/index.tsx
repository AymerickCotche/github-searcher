// == Import
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import * as _ from 'lodash';
import './styles.scss';

import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import Cards from 'src/components/Cards';
import Faq from 'src/components/Faq';
import Navbar from '../Navbar';
import logo from './logo-github.png';
import { Results } from '../../type';

// == Composant
const App = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [search, setSearch] = useState('');
  const [resultsApi, setResultsApi] = useState({
    items: [],
    total_count: 0,
  });

  const getDatas = async (userSearch: string) => {
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
      <div className="app__logo">
        <img src={logo} className="app__logo" alt="logo github" />
      </div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <div>
              <SearchBar
                inputValue={inputSearch}
                onChangeInputValue={setInputSearch}
                setSearch={setSearch}
              />
              <Message counter={total_count} />
              <Cards repos={items} />
            </div>
          )}
        />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
};

// == Export
export default App;
