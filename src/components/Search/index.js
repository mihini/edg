import React, { useState } from 'react';
import Button from '../Button';
import './Search.scss';

const Search = (props) => {
  const [searchText, setSearchText] = useState('');


  return (
    <div className="search">
      <label className="search__label" htmlFor="summoner">Search summoner</label>
      <div className="search__form">
        <input
          type="text"
          className="search__input"
          id="summoner"
          placeholder="Summoner name"
          onChange={e => setSearchText(e.target.value)}
        />
        <Button text="Search" width="70px" display="inline-block" handleEvent={() => props.filter(searchText)} />
      </div>
    </div>
  )
}

export default Search;