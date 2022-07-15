import { createContext, useState } from "react";

export const CartContext = createContext({
    cartDropdownState : null,
    setCartDropdownState : () => {}
});

export const CartProvider = ({children}) => {
    const [cartDropdownState, setCartDropdownState] = useState(false);
    const value = {cartDropdownState, setCartDropdownState};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};