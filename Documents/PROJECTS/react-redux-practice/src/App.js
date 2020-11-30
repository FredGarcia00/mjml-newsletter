import React, { useEffect, useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './Login'
import Checkout from './Checkout'
import Header from './Header'
import Home from './Home'
import { useDispatch } from 'react-redux'
import { auth } from './Firebase'
import { login, logout } from './features/counter/UserSlice'
import './App.css'

function App() {
  const dispatch = useDispatch();
  console.log('this is the auth',auth)
  useEffect(() => {
     let unsubscribe = 
    auth.onAuthStateChanged((authUser) => {
      console.log('the authUser is ', authUser)
      if(authUser) {
          dispatch(login({
            user: authUser.email,
          }))
          
        }
        else {
          //the user is logged out
          dispatch(logout({user:null}));
        }
      })
      
      
  },[])
 
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/login">
          <Header/>
          <Login/>
        </Route>
        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>
        <Route path="/">
          <Header/>
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
