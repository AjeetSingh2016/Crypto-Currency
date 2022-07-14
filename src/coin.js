import React from 'react'
import './coin.css'

const coin = ({title,price,volume,symbol,image}) => {
  return (
    <div className="coin-container">
        <div className="coin-row">
            <div className="coin">
                <img src={image} alt="crypto" />
                <h1>{title}</h1>
                <p className="coin-symbol">{symbol}</p>
            </div>
            <div className="coin-data">
                <p className="coin-price">${price}</p>
                <p className="coin-volume">${volume}</p>
            </div>
        </div>
    </div>
  )
}

export default coin




