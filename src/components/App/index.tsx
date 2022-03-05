// == Import
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import * as _ from 'lodash';
import './styles.scss';

import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import Cards from 'src/components/Cards';
import Faq from 'src/components/Faq';
import BtnMoreResults from 'src/components/BtnMoreResult';
import Navbar from 'src/components/Navbar';
import logo from './logo-github.png';

// == Composant
const App = () => {
  // == States
  const [inputSearch, setInputSearch] = useState('');
  const [search, setSearch] = useState('');
  const [resultsApi, setResultsApi] = useState({
    items: [],
    total_count: 0,
  });
  const [hasResults, setHasResults] = useState(false);
  const [sortBy, setSortBy] = useState('created');
  const [orderBy, setOrderBy] = useState('desc');
  const [resultsNb, setResultsNb] = useState(9);
  // == Functions
  const getDatas = async () => {
    try {
      const datas = await axios.get(
        `https://api.github.com/search/repositories?q=${search}&sort=${sortBy}&order=${orderBy}&page=1&per_page=${resultsNb}`,

      );
      setResultsApi(datas.data);
      setHasResults(true);
    } catch (error) {
      console.log(error);
    }
  };
  // == useEffect to get repos when needed
  useEffect(() => {
    if (search !== '') getDatas();
  }, [search, orderBy, sortBy, resultsNb]);

  // eslint-disable-next-line @typescript-eslint/naming-convention
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
                setSortBy={setSortBy}
                setOrderBy={setOrderBy}
                orderByValue={orderBy}
                setResultsNb={setResultsNb}
              />
              <Message counter={total_count} />
              {
                hasResults &&
                (
                  <div>
                    <Cards repos={items} />
                    <BtnMoreResults resultsNbValue={resultsNb} setResultsNb={setResultsNb} />
                  </div>
                )
              }
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
