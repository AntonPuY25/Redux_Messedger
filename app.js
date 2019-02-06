import React from "react";
import ReactDom from "react-dom";
import List from "./main";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import roootReducer from "./rootreducer";
import reduxPromise from "redux-promise";
import reduxThunk from "redux-thunk";

 
let myStore = createStore(roootReducer,applyMiddleware(reduxPromise,reduxThunk));
ReactDom.render(<Provider store={myStore}><List/></Provider>,document.getElementById('test'));