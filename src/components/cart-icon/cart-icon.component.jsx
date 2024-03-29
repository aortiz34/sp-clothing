import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
    const {cartDropdownState, setCartDropdownState, cartCount} = useContext(CartContext);

    const toggleCartDropdownState = () => setCartDropdownState(!cartDropdownState);
    return (
        <div className='cart-icon-container' onClick={toggleCartDropdownState}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;