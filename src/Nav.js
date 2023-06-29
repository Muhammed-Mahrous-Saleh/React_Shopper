import React from 'react';
import NavLink from './NavLink'
import './all.min.css'

const Nav = ({ activeTab, onTabChange, itemCounts, total }) => (
    <nav className="App-nav">
        <ul>
            <li className={`App-nav-item ${activeTab === 0 && 'selected'}`}>
                <NavLink index={0} onClick={onTabChange}>Items</NavLink>
            </li>
            <li className={`App-nav-item ${activeTab === 1 && 'selected'}`}>
                <NavLink index={1} onClick={onTabChange}>Cart</NavLink>
            </li>
        </ul >
        <div className='summary'>
            <i class="fa-solid fa-cart-shopping"></i>
            {itemCounts>1&&(<span> {itemCounts} Items </span>)}
            {itemCounts===1&&(<span> {itemCounts} Item </span>)}
            <span>(${total})</span>
        </div>
    </nav >
);
export default Nav;