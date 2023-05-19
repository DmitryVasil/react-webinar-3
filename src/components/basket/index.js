import React from "react";
import PropTypes, { func } from 'prop-types';
import './style.css';

function Basket(props) {
  console.log(props.listBasket);

 return (
  <div className="Basket">
    <div className="Basket-descr">В корзине: {props.listBasket.length ? <b>{props.listBasket.length}</b> : <b>пусто</b>}</div>
    <div></div>
    <button onClick={()=>{}}>
      Перейти
    </button>
  </div>
  
 )
}

export default Basket;