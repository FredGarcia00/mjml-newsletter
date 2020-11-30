import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { selectBasket } from './features/counter/BasketSlice';
import { selectUser } from './features/counter/UserSlice';
import { logout } from './features/counter/UserSlice';
import { useSelector } from 'react-redux';
import { auth } from './Firebase';
import { useDispatch } from 'react-redux'


import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css'

function Header() {
    const dispatch = useDispatch();
    const {basket} = useSelector(selectBasket);
    const user = useSelector(selectUser);
    // console.log('The real length is :',basket?.length);
    // console.log('this is the auth', auth);
    console.log('this is the header user', user);
    

  const login = () => {
    if(user) {
        dispatch(logout());
    }
  }

    return (
        <div className="header">
            <Link to="/">
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
            <div className="header__input">
                <input className="header__inputBox" type="text"/>
                <SearchIcon fontSize="medium" className="header__icon"/>
            </div>
            <div className="header__nav">
                <Link className="header__user" to={!user && "/login"}>
            <div onClick={login} className="header__option header__outline">
                <span className="header__top">Hello {user?.user}</span>
                <div >{user? 'Sign out': 'Sign in'}</div>
            </div>
                </Link>
            <div className="header__option header__outline">
                <span className="header__top">Returns</span>
                <span>& orders</span>
            </div>

            <Link className="header__user" to="checkout">
                <div className="header__option header__outline">
                <ShoppingBasketIcon style={{fontSize:'20px'}}/>
                <span>Cart {basket?.length}</span>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default Header
