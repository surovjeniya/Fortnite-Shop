import React,{useContext} from "react";
import './Categories.scss';
import { AppContext } from "../../context/AppContext";
//components
import CategoriesSwitcher from '../CategoriesSwitcher';

export default function Categories () {

    const {rarity} = useContext(AppContext)
   

    return (
        <div className="categories">
            <div className="categories__switch">
                {rarity.map(item => (
                    <CategoriesSwitcher key={item} category={item}/>
                ))}
            </div>
        </div>
    )
}