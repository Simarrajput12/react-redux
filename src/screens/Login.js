import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'
import InputText from '../components/InputText';
import Button from '../components/Button'
import loginSuccess from '../redux/actions/loginActions'
import {connect} from 'react-redux'
class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
  }

  
onClick=()=>{
  this.props.loginSuccess(this.state.email,this.state.password);

}


  render() {
    return (
     
      <View style={styles.container}>
      <TouchableOpacity onPress={()=>Actions.peoplelist()}>
      <InputText placeholder='Email' textAlign='center' 
      onChangeText={email => this.setState({email: email})}
        />
        <InputText placeholder='Password' marginTop={30} textAlign='center' 
      onChangeText={password => this.setState({password: password})}
        />
        <Button 
        // onPress={()=>this.props.navigation.navigate('Root2')}
        onPress={this.onClick
        }
        
        backgroundColor='green' 
        height={50} 
        marginLeft={30} 
        marginRight={30} 
        width={300} 
        title='Login' 
        marginTop={50} 
        color='#fff'
        borderRadius={5}/>
       {/* <Text style={{fontSize:25,color:'#fff'}}>Click Here...</Text> */}
       </TouchableOpacity>
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#093339',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {
    user:state
    

  };
}
// const mapDispatchToProps = (dispatch,)=> {
//   return {
//     loginSuccess: () => dispatch(loginSuccess())
//   };
// }
export default connect(mapStateToProps,{loginSuccess})(Login);