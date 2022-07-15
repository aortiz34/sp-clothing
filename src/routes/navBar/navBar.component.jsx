import { Fragment, useContext } from 'react';
import {Outlet, Link} from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import {ReactComponent as SPLogo} from '../../assets/crown.svg';
import { SignOutUser } from '../../utils/firebase/firebase.utils';

import './navBat.styles.scss';

const NavBar = () => {
    const {currentUser} = useContext(UserContext);
    const { cartDropdownState, setCartDropdownState } = useContext(CartContext);
    return (
        <Fragment>
            <div className='navBar'>
                <Link className='logo-container' to='/'>
                    <div><SPLogo/></div>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={SignOutUser}> SIGN OUT</span>
                        
                    ) : (
                        <Link className='nav-link' to='/auth'>
                        SIGN IN
                        </Link>
                    )}
                        <CartIcon />
                </div>
                { cartDropdownState && <CartDropdown/>}
            </div>
            <Outlet />
        </Fragment>
    );
};

export default NavBar;