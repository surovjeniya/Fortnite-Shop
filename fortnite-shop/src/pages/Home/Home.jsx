import React,{useContext} from "react";
import { AppContext } from "../../context/AppContext";
import './Home.scss'
import Card from "../../components/Card/";
import Categories from '../../components/Categories'
export default function Home () {

    const {shopItems,filteredItems} = useContext(AppContext)



    return (
        <div className="home container">
            <Categories/>
            <h1 className="home__title">Все товары</h1>
            <div className="home__items">
                {!filteredItems.length ? shopItems.map(item => (
                    <Card key={item.mainId} data={item}/>
                )) : filteredItems.map(item => (
                    <Card key={item.mainId} data={item}/>
                ))}
                {}
            </div>
        </div>
    )
}