import React from 'react';
import './Summoner.scss';

const Summoner = (props) => {
  const summoner = props.summoner;

  const getWinRate = () => {
    const totalGames = summoner.wins + summoner.losses;
    return Math.round((summoner.wins / totalGames) * 100);
  }

  return (
    <div className={`summoner ${props.rank === 0 ? 'summoner--first' : ''}`}>
      <div className="summoner__content">
        <div className="summoner__head">
          <span className="summoner__badge">{props.rank + 1}</span>
        </div>
        <h1 className="summoner__title">{summoner.summonerName}</h1>
        <p>{summoner.leaguePoints} Lp</p>
        <p>{summoner.tier}</p>
        <div className="summoner__stats">
          {getWinRate()}% wins
          <div className="summoner__stats-bar">
            <span className="summoner__stats-bar__wins" style={{ width: getWinRate() + '%' }}>{summoner.wins}</span>
            <span className="summoner__stats-bar__losses" style={{ width: 100 - getWinRate() + '%' }}>{summoner.losses}</span>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Summoner;