import React from 'react'
import { AppContext } from '../../context/AppContext';
import './App.scss'

export default function App () {


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