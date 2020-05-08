import * as React from 'react';
import rootReduce from './redux/rootReduce';
import  { Provider }   from 'react-redux';
import {createStore} from 'redux';
import RootApp from "./RootApp";

const ProviderApp=(props)=>{
    const store = createStore(rootReduce);
    return(
        <Provider store={store}>
            <RootApp /> 
        </Provider>
    );



}
export default ProviderApp;