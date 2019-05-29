import React,{Component} from 'react';
import {View,Dimensions,Alert,AsyncStorage,Text} from 'react-native';
import MyTextInput from '../components/InputText/index'
import Button from '../components/Button'
import { Actions } from 'react-native-router-flux';
//  const name=AsyncStorage.getItem('name');
//  const number=AsyncStorage.getItem('number');
//  const Realm = require('realm');
// import Realm from 'realm'
export default class ContactList extends Component{
constructor(props){
    super(props);
    this.state={
        name:'',
        number:'',
        realm: null
    }
}


// componentDidMount(){
//   this.state.name= AsyncStorage.getItem('name');
//     AsyncStorage.getItem('number');
// }
   
render(){
    const name = AsyncStorage.getItem('name');
    // const info = this.state.realm
    // ? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
    // : 'Loading...';
        return(
          <View style={{flex:1,backgroundColor:'#fff'}}>
            
             <Text>{name}</Text>
             
          </View>
        )
    }
}

