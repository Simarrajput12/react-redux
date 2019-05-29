import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import PeopleProfile from './src/screens/PeopeProfile'
import MyProvider from './src/redux/Provider'

export default class App extends React.Component {
  render() {
    return (
     
      <View style={styles.container}>
       <MyProvider/>
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
