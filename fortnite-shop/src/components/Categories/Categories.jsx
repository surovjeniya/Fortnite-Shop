import React,{useContext} from "react";
import './Categories.scss';
import { AppContext } from "../../context/AppContext";
//components
import CategoriesSwitcher from '../CategoriesSwitcher';

export default function Categories () {

    const {shopItems} = useContext(AppContext)
    const categories = shopItems.reduce((q,item) => {
        return q.includes(item.rarity.id) ? q : [...q,item.rarity.id]
    },[])

    return (
        <div className="categories">
            <div className="categories__left">
                {categories.map(item => (
                    <CategoriesSwitcher key={item} category={item}/>
                ))}
            </div>
            <div className="categories__right">sds</div>
        </div>
    )
}