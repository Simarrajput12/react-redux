import React,{Component} from 'react';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {Provider} from 'react-redux';
// import PeopleProfile from '../screens/PeopeProfile';
import peopleReducer from '../redux/reducers/peopleReducer';
import user from '../redux/reducers/loginReducer'
import thunk from 'redux-thunk';
// import Root from '../route/route'
import Root from '../route/MyRoot'
import userReducer from '../redux/reducers/loginReducer'
// import peopleReducer from '../redux/reducers/index1'
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const combineReducer=combineReducers({
//     peopleReducer,
//     userReducer 
// }
//     );
// const finalreducers = combineReducers({peopleReducer,user});
const store = createStoreWithMiddleware(peopleReducer,user);
//  const store=createStore(combineReducer, applyMiddleware(thunk))


export default class MyProvider extends Component{
 render  (){
     return(
    <Provider store = {store}>
   {/* <PeopleProfile/> */}
  <Root/>
    </Provider>
     )
 }
}