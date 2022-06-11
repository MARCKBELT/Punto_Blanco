import {compose, applyMiddleware } from 'redux';
import reducer from '../reducers';
import { configureStore } from '@reduxjs/toolkit'

import thunk from 'redux-thunk';



const composeEnhancers = 
(typeof window !== 'undefined' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
compose;


 const store = configureStore({reducer}, composeEnhancers(
     applyMiddleware(thunk)
 ));


export default store