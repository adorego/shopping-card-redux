import React,{useEffect} from "react";
import {fetchCartData, sendCartData} from "./store/cart-actions";
import {useDispatch, useSelector} from "react-redux";

import Cart from './components/Cart/Cart';
import { Fragment } from 'react';
import Layout from './components/Layout/Layout';
import Notification from "./components/UI/Notification"
import Products from './components/Shop/Products';

let isInitial = true; 

function App() {
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const notification = useSelector(state => state.ui.notification);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() =>{
    if(isInitial){
      dispatch(fetchCartData());
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  },[cart, dispatch])

  return (
    <Fragment>
     {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
    
  );
}

export default App;
