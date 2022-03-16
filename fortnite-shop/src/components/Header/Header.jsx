import React from "react";
import {Link} from 'react-router-dom';
import './Header.scss';
//components
import Busket from "../Busket/";

export default function Header () {
    return (
        <header className="header container">
            <nav className="header__nav">
                <Link className="header__logo" to='/'>
                    Fortnite Shop
                    <p className="header__logo-subtitle">лучший магазин во вселенной</p>
                </Link>
                <ul>
                    <li>
                        <Busket/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}