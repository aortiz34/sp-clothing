import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {    
    const {cartItems, totalCost} = useContext(CartContext);
    return (
        <div className="checkout-container">
            <div className="checkout-items">
                {cartItems.map((item) => (
                <div className="item" key={item.id}>
                    <CheckoutItem key={item.id} cartItem={item}/>
                    <br/>
                </div>
                ))}
            </div>
            <span className="total">{totalCost}</span>
        </div>
    )
}

export default Checkout;