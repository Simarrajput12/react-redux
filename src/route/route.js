import React, { Component } from 'react'
import {createStackNavigator,createAppContainer,} from 'react-navigation';
import Login from '../screens/Login'
import PeopleProfile from '../screens/PeopeProfile'
  const  Root = createStackNavigator({
 Login:{
     screen:Login
 },
   PeopleProfile:{
       screen:PeopleProfile
   },

},
{
    initialRouteName: 'Login',
  }
)


export default createAppContainer(Root);
