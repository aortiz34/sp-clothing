import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
        {...cartItem, quantity : cartItem.quantity +1} : cartItem
        );
    }
    return [...cartItems, {...productToAdd, quantity:1}];
};

const decrementCartItem = (cartItems, productToReduce) => {
    return cartItems.map((cartItem) => cartItem.id === productToReduce.id ?
        {...cartItem, quantity : cartItem.quantity -1} : cartItem
        ).filter((cartItem) => cartItem.quantity !== 0);

};

const deleteCartItem = (cartItems, productToDelete) => {
    return cartItems.map((cartItem) => cartItem.id === productToDelete.id ?
        {...cartItem, quantity : 0} : cartItem
        ).filter((cartItem) => cartItem.quantity !== 0);
}

export const CartContext = createContext({
    cartDropdownState : null,
    setCartDropdownState : () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    decrementItemsFromCart: () => {},
    deleteItemFromCart: () => {},
    totalCost:0
});

export const CartProvider = ({children}) => {
    const [cartDropdownState, setCartDropdownState] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem ) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
        const newCartCost = cartItems.reduce((totalCost, cartItem ) => totalCost + (cartItem.quantity * cartItem.price), 0);
        setTotalCost(newCartCost);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const decrementItemsFromCart = (productToReduce) => {
        setCartItems(decrementCartItem(cartItems,productToReduce));
    };
    
    const deleteItemFromCart = (productToDelete) => {
        setCartItems(deleteCartItem(cartItems,productToDelete));
    }

    const value = {cartDropdownState, setCartDropdownState, addItemToCart, cartItems, cartCount, decrementItemsFromCart, deleteItemFromCart,totalCost};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};