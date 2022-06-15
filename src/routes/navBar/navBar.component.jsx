import { Fragment } from 'react';
import {Outlet, Link} from 'react-router-dom';

import {ReactComponent as SPLogo} from '../../assets/crown.svg';

import './navBat.styles.scss';

const NavBar = () => {
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
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default NavBar;