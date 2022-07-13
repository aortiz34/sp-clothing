import { UserContext } from '../../contexts/user.context';
import { Fragment, useContext } from 'react';
import {Outlet, Link} from 'react-router-dom';
import { SignOutUser } from '../../utils/firebase/firebase.utils';

import {ReactComponent as SPLogo} from '../../assets/crown.svg';

import './navBat.styles.scss';

const NavBar = () => {
    const {currentUser} = useContext(UserContext);

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
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default NavBar;