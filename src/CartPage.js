import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

function CartPage({ items, onAddOne, onRemoveOne, total }) {
    return (
        ((parseInt(total) !== 0) &&
            <div>
                <ul className="CartPage-items">
                    {items.map(item =>
                        <li key={item.id} className="CartPage-item">
                            <Item item={item}>
                                <div className="CartItem-controls">
                                    <button
                                        className="CartItem-removeOne"
                                        onClick={() => onRemoveOne(item)}>&ndash;</button>
                                    <span className="CartItem-count">{item.count}</span>
                                    <button
                                        className="CartItem-addOne"
                                        onClick={() => onAddOne(item)}>+</button>
                                </div>
                            </Item>
                        </li>
                    )}
                </ul>
                <div className='cart-total'>Total: ${total}</div>
            </div>) || <div className='empty-message'><span>Your cart is empty</span><span>Why not add some expensive products to it?</span></div>
    );
}
CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired,
    total: PropTypes.string.isRequired
};
export default CartPage;