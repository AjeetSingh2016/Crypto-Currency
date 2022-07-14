import { useState, useEffect } from "react";
import axios from "axios";
import  ImportComponent  from './coin';
import './app.css'

function App() {

  const [search, setSearch] = useState('');

  const changeFunction = (e) =>{
    setSearch(e.target.value)
  }

  const [coinData, setCoin] = useState([])
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false')
    .then(function(res){
      setCoin(res.data)
    }).catch(function(){
      alert("Hello")
    })
  },[]);

  const filterCoins = coinData.filter(coinData=>{
    return coinData.name.toLowerCase().includes(search.toLowerCase())
  });





  return (
    <div className="coin-app">

      <div className="coin-search">
      <h1>Search Currency</h1>
      <input type="text" onChange={changeFunction} placeholder="Search"/>
      </div>


      { filterCoins.map(data=>{
        return <ImportComponent title={data.name} symbol={data.symbol} price={data.current_price} image={data.image} volume={data.market_cap}/>

      })}
    </div>
    

  );
}
export default App;
