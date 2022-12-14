import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../custom hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user,handleSignOut } = useFirebase();
    return (
        <div>
            <nav className='nav-bar'>
                <Link to={'/home'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/orders'}>Orders</Link>
                <Link to={'/register'}>Register</Link>
                <span>{user?.displayName && user?.displayName}</span>
                {
                    user?.uid
                        ?
                        <button onClick={handleSignOut} >Sign Out</button>
                        :
                        <Link to={'/login'}>Log-In</Link>
                }

            </nav>
        </div>
    );
};

export default Header;