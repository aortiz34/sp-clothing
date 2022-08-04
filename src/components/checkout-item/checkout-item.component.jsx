import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {
    const { name, imageUrl, price,  quantity} = cartItem;
    const {addItemToCart, decrementItemsFromCart, deleteItemFromCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(cartItem);

    const decrementProductFromCart = () => decrementItemsFromCart(cartItem);

    const deleteProductFromCart = () => deleteItemFromCart(cartItem);

    return (

        <div className="checkout-item-container">
            <img src={imageUrl} alt={`${name}`}/>
            <span className='name '>{name}</span>
            <span className="decrement" onClick={decrementProductFromCart}>{'<'}</span>
            <span className="quantity">{quantity}</span>
            <span className="increase" onClick={addProductToCart}>{'>'}</span>
            <span className='price'>{price}</span>
            <span className="delete-button" onClick={deleteProductFromCart}> X</span>
        </div>

    )
}

export default CheckoutItem;