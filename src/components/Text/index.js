

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

    class text extends Component {
      
      static propTypes = {
        title: PropTypes.string.isRequired,
        color:PropTypes.string.isRequired,
        fontSize:PropTypes.number.isRequired,
        fontWeight:PropTypes.string.isRequired,
        fontFamily:PropTypes.string.isRequired,
      
      render() {
       return (
          <Text style={{color:this.props.color,fontSize:this.props.fontSize,fontFamily:this.props.fontFamily}}
          title={this.props.title}
       
          >{this.props.title}
          </Text> 
         
       )  
      }
    }
  }


    export default text;