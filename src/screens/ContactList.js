import React,{Component} from 'react';
import {View,Dimensions,Alert,AsyncStorage} from 'react-native';
import MyTextInput from '../components/InputText/index'
import Button from '../components/Button'
import { Actions } from 'react-native-router-flux';
export default class ContactList extends Component{

    constructor(props){
        super(props);
        this.state={
            name:'',number:'',
            userData:''
        }
    }


addData=()=>{
    //  const name= this.state.name.concat(this.state.name)
    //  const number= this.state.number.concat(this.state.number)
    // Alert.alert(name+  " " +number)
    AsyncStorage.setItem('name' ,this.state.name)
    AsyncStorage.setItem('number' ,this.state.number)
    Alert.alert(this.state.name+  " " +this.state.number)

}

    render(){
        return(
          <View style={{flex:1,backgroundColor:'#fff'}}>
            
              <MyTextInput placeholder='  Enter name' marginTop={30}    onChangeText={name => this.setState({name: name})} />
              <MyTextInput placeholder='  Enter number' marginTop={30}  onChangeText={number => this.setState({number: number})}  />

              <Button 
        // onPress={()=>this.props.navigation.navigate('Root2')}
        onPress={this.addData
        }
        
        backgroundColor='green' 
        height={50} 
        marginLeft={30} 
        marginRight={30} 
        width={300} 
        title='Save' 
        marginTop={50} 
        color='#fff'
        borderRadius={5}/>
           <Button 
        // onPress={()=>this.props.navigation.navigate('Root2')}
        onPress={()=>Actions.detail()}
        // }
        
        backgroundColor='green' 
        height={50} 
        marginLeft={30} 
        marginRight={30} 
        width={300} 
        title='Detail' 
        marginTop={50} 
        color='#fff'
        borderRadius={5}/>
          </View>
        )
    }
}

