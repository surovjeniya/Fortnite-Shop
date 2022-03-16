import React,{useState,useEffect} from 'react'
import { AppContext } from '../../context/AppContext';
import {getShop} from '../../services/api'
import './App.scss'

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
            
            </div>
        </AppContext.Provider>
    )
}