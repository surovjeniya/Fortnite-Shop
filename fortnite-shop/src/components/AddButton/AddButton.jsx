import React,{useContext} from "react";
import { AppContext } from "../../context/AppContext";
import './AddButton.scss';

export default function AddButton ({data}) {

    const {orderHanlder} = useContext(AppContext)

    const {
        mainId,
        displayName,
        price
    } = data


    return (
        <button 
            onClick = {(e) => {
                e.target.innerText = 'Добавлено'
                e.target.classList.add('added')
                orderHanlder({
                    id:Date.now(),
                    displayName,
                    price,
                    mainId
                })
            }}
            className="add-button">
            Добавить
        </button>
    )
}