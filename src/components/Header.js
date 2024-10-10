import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
export default function Header() {
    return (
        <header>
            <div>
                <span className='logo'>House Staff</span>
                <ul className='nav'>
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <FaShoppingCart className='shop-cart-button'/>
            </div>
            <div className='presentation'></div>
        </header>
    )
}
