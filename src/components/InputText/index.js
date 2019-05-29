

import React,{Component} from 'react';
import{
 Text,
 Image,
 View,
 TouchableOpacity,
 Alert,
 TextInput
}
from 'react-native';
import PropTypes from 'prop-types';

    class inputText extends Component {
      
      static propTypes = {
        title: PropTypes.string.isRequired,
        onPress : PropTypes.object.isRequired,
        marginTop:PropTypes.number.isRequired,
        placeholder:PropTypes.string.isRequired,
        textAlign:PropTypes.string.isRequired,
        value:PropTypes.string.isRequired,
        onChangeText:PropTypes.func.isRequired
    }
      
      render = () => {
       return (
          <View style={{backgroundColor:'#000',borderRadius:5,borderColor:'green',borderWidth:5,marginTop:this.props.marginTop}}>
               <TextInput 
               placeholderTextColor="#fff"
               placeholder={this.props.placeholder}
               textAlign={this.props.textAlign}
               value={this.props.value}
               style={{height:50,width:300,color:'#fff',marginRight:10,marginLeft:10}}
               onChangeText={this.props.onChangeText}>
                </TextInput>
               </View>
        );
      }
    }


    export default inputText;