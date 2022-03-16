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

export default function App () {

    const [shopItems,setShopItems] = useState([])
    
    useEffect(() => {
        getShop().then(data => setShopItems(data.shop))
        
    },[])

    const value = {
        example:''
    }

    return (
        <AppContext.Provider value = {value}>
            <div className="app">
                <Router>
                    <Header/>
                    <main className="main">
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