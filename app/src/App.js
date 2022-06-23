import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Token from './Token.js';

function App() {
  const [count, setCount] = useState(0);
  const [token, setToken] = useState([]);
  const api_price_cg ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=falsehttps://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=falsehttps://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=falsehttps://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=falsehttps://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

  useEffect(() => {
    axios
      .get(api_price_cg)
      .then(res => {
        setToken(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);


  return (
    <div className='app'>
	  <h1>{count}</h1>
	  <button onClick={()=>setCount(count-1)}>-</button>
	  <button onClick={()=>setCount(count+1)}>+</button>
            <div className='token'>
               key={token.id}
               name={token.name}
               price={token.current_price}
               symbol={token.symbol}
               marketcap={token.total_volume}
               volume={token.market_cap}
               image={token.image}
               priceChange={token.price_change_percentage_24h}
            </div>
    </div>
 )
}

export default App;
