import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import {getShop} from '../../services/api'
import './App.scss'
//components
import Header from '../Header'
import Home from '../../pages/Home'
import Cart from '../../pages/Cart'
import NotFound from '../../pages/NotFound'
import Categories from '../../components/Categories'

export default function App () {

    const [shopItems,setShopItems] = useState([])
    const [order,setOrder] = useState([])
    const [rarity,setRarity] = useState(['Legendary','Rare','Uncommon','Epic','All'])
    const [filteredItems,setFilteredItems] = useState([])
    
    useEffect(() => {
        getShop().then(data => setShopItems(data.shop))
        
    },[])

    const orderHanlder = (item) => {
        setOrder([...order,item])
    }

    const filterHandler = (filter) => {
        setFilteredItems(shopItems.filter(item => item.rarity.id === filter))
    }

    const value = {
        shopItems,
        orderHanlder,
        order,
        filterHandler,
        rarity,
        filteredItems
    }

    return (
        <AppContext.Provider value = {value}>
            <div className="app wrapper">
                <Router>
                    <Header/>
                    <main className="main">
                        <Categories/>
                        <Routes>
                            <Route exact path='/' element = {<Home/>}/>
                            <Route  path='/cart' element = {<Cart/>}/>
                            <Route  path='*' element = {<NotFound/>}/>
                        </Routes>
                    </main>
                </Router>
            </div>
        </AppContext.Provider>
    )
}