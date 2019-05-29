import React, { Component } from 'react';
import {Router,Stack,Scene,} from 'react-native-router-flux'
import PeopleProfile from '../screens/PeopeProfile';
import Login from '../screens/Login';
import ContactList from '../screens/ContactList';
import Detail from '../screens/Detail'
const App = () => (
    <Router>
      <Stack key="root">
        <Scene key="login" component={ Login}title="Login"/>
        <Scene key="peoplelist" component={PeopleProfile} title="People List"/>
        <ContactList key="contact" component={ContactList} title="Contact List"/>
        <ContactList key="detail" component={Detail} title="Detail"/>
      </Stack>
    </Router>
  );

  export default App;