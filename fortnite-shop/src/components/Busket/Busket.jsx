import React,{useContext} from "react";
import {Link} from  'react-router-dom'
import { AppContext } from "../../context/AppContext";
import './Busket.scss'

export default function Busket() {

    const {order} = useContext(AppContext)
    const totalPrice = order.reduce((sum,item) => {
        return sum + item.price.regularPrice
    },0)

    return (
        <Link to='/cart' className="busket">
            {order.length ? totalPrice : '0'} Р | {order.length < 10 ? order.length : '9+'}
        </Link>
    )
}