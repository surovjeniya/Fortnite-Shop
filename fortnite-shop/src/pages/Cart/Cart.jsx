import React,{useContext} from "react";
import {Link} from 'react-router-dom'
import { AppContext } from "../../context/AppContext";
import './Cart.scss';
//components
import CartItem from '../../components/CartItem'

export default function Cart () {

    const {order ,removeOrderHanlder} = useContext(AppContext)
    const totalPrice = order.reduce((sum,item) => {
        return sum + item.price.regularPrice
    },0)

    console.log(order)
    return (
        <div className="cart container">
            <div className="cart__top">
                <h2 className="cart__title">
                    <i className="fa-solid fa-cart-shopping"></i>
                    Корзина
                </h2>
                <button 
                    onClick={() => removeOrderHanlder('i')}
                    className="btn__clear">
                    <i className="fa-regular fa-trash-can"></i>
                    Очистить корзину
                </button>
            </div>
            <div className="cart__items">
                <ul>
                    {order.map(item => (
                        <li key={item.id}>
                            <CartItem data={item}/>
                        </li>
                    ))}
                    
                </ul>
            </div>
            <div className="cart__bottom">
                <p className="cart__count">Всего товаров: <span>{order.length}шт</span></p>
                <p className="cart__price">Сумма заказа: <span>{totalPrice}</span></p>
            </div>
            <div className="cart__buttons">
                <Link  to='/' className="btn-back cart__btn">Вернуться назад</Link>
                <Link to='/set-order' className="btn-order cart__btn">Оформить заказ</Link>
            </div>
        </div>
    )
}