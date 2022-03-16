import React,{useContext} from "react";
import { AppContext } from "../../context/AppContext";
import './Card.scss';
//components
import AddButton from "../AddButton/";

export default function Card ({data}) {

    const {orderHanlder} = useContext(AppContext)

    const {
        displayName,
        displayAssets,
        displayDescription,
        price
    } = data

    return (
        <div className="card">
            <div className="card__top">
                <img src={displayAssets[0].background} alt="" />
                <h3 className="card__name">
                    {displayName}
                </h3>
            </div>
            <div className="card__description">
                {displayDescription}
            </div>
            <div className="card__bottom">
                <h3 className="card__price">от {price.regularPrice}</h3>
                <div className="card__btn">
                    <AddButton data={data}/>
                </div>
            </div>
        </div>
    )
}