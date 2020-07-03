import React, { useState } from 'react';
import FetchData from '../../FetchData';
import Summoner from '../Summoner';
import Search from '../Search/';
import './Leaderboard.scss';

const filterSummoners = (summoner) => {

}

function Leaderboard() {
  const [dataState] = FetchData('lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?page=1');

  return (
    dataState.isFetching ?
      <div>
        <p>Loading...</p>
      </div>
      :
      <div>
        <Search filter={filterSummoners} />
        <h1>Leaderboard</h1>
        <span>Only showing challengers</span>
        <div className="leaderboard__table">
          {dataState.data.map((summoner, i) => <Summoner key={summoner.summonerId} summoner={summoner} rank={i}></Summoner>)
          }
        </div>
      </div >

  );
}

export default Leaderboard;