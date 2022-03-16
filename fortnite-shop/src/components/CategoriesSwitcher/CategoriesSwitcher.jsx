import React from "react";
import './CategoriesSwitcher.scss'

export default function CategoriesSwitcher ({category}) {
    return (
        <button className="categories-switcher">
            {category}
        </button>
    )
}