import React,{useContext} from "react";
import { AppContext } from "../../context/AppContext";
import './Cart.scss';
//components
import CartItem from '../../components/CartItem'

export default function Cart () {

    const {order} = useContext(AppContext)
    const totalPrice = order.reduce((sum,item) => {
        return sum + item.price.regularPrice
    },0)

    console.log(order)
    return (
        <div className="cart container">
            <div className="cart__top">
                <h2 className="cart__title">
                    Корзина
                </h2>
                <button>Очистить корзину</button>
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
                <p className="cart__count">{order.length}</p>
                <p className="cart__price">{totalPrice}</p>
            </div>
            <div className="cart__buttons">
                <button>Назад</button>
                <button>Оформить заказ</button>
            </div>
        </div>
    )
}