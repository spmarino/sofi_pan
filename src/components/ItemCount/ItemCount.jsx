import './ItemCount.css'
import React from 'react';
import { useState } from 'react';
import ItemList from '../ItemList/ItemList';


const ItemCount = ({stock, initial}) => {
  const [count, setCount] = useState(1);

  const addItem = () => {
    if(count<stock)setCount(count + 1);
  }

  const restItem = () => {
    if(count>initial)setCount(count - 1);
  }

  return (
      <>
      <div className="card">
        <div className="card-body">
      
          <div className="counter d-flex justify-content-center align-items-center" >
        <button className="btn btn-secondary" onClick={restItem}>-</button>
          <p>{count}</p>
        <button  className="btn btn-secondary" onClick={addItem}>+</button>
          </div>
        </div>
      </div>
      </>

  );
  };

  export default ItemCount