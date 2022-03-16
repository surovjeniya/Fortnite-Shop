import React,{useContext} from "react";
import './CategoriesSwitcher.scss'
import { AppContext } from "../../context/AppContext";

export default function CategoriesSwitcher ({category}) {

    const {filterHandler} = useContext(AppContext);


    return (
        <button 
            onClick = {(e) => {
                document.querySelectorAll('.categories-switcher').forEach(item => item.classList.remove('active'))
                e.target.classList.add('active')
                filterHandler(category)
            }}
            className="categories-switcher">
            {category}
        </button>
    )
}