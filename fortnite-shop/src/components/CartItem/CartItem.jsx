import React,{useContext} from "react";
import { AppContext } from "../../context/AppContext";
import './CartItem.scss';

export default function CartItem ({data}) {


    const {removeCartHanlder} = useContext(AppContext)

    return (
        <div className="cart-item">
            <img src={data.displayAssets[0].background} alt="" className="cart-item__img" />
            <div className="cart-item__info">
                <h3 className="cart-item__name">{data.displayName}</h3>
                <p className="cart-item__description">{data.displayDescription}</p>
            </div>
            <h3 className="cart-item__price">
                {data.price.regularPrice}
            </h3>
            <button 
                onClick = {() => removeCartHanlder(data.id)}
                className="cart-item__btn">
                x
            </button>
        </div>
    )
}