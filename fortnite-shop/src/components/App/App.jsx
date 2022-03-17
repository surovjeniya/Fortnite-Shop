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
import SetOrder from '../../pages/SetOrder'

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

    const removeCartHanlder = (id) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const removeOrderHanlder = (item) => {
        setOrder(order.filter(i => i.id == item))
    }

    const finalOrderHandler = (personladata) => {
        console.log(personladata,order)
    }


    const value = {
        shopItems,
        orderHanlder,
        order,
        filterHandler,
        rarity,
        filteredItems,
        removeCartHanlder,
        removeOrderHanlder,
        finalOrderHandler
    }

    return (
        <AppContext.Provider value = {value}>
            <div className="app wrapper">
                <Router>
                    <Header/>
                    <main className="main">
                        <Routes>
                            <Route exact path='/' element = {<Home/>}/>
                            <Route  path='/cart' element = {<Cart/>}/>
                            <Route  path='/set-order' element = {<SetOrder/>}/>
                            <Route  path='*' element = {<NotFound/>}/>
                        </Routes>
                    </main>
                </Router>
            </div>
        </AppContext.Provider>
    )
}