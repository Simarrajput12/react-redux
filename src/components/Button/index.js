

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

    class button extends Component {
      
      static propTypes = {
        title: PropTypes.string.isRequired,
        onPress : PropTypes.func.isRequired,
        marginTop:PropTypes.number.isRequired,
        height:PropTypes.number.isRequired,
        width:PropTypes.number.isRequired,
        backgroundColor:PropTypes.string.isRequired,
        marginBottom:PropTypes.number.isRequired,
        marginRight:PropTypes.number.isRequired,
        marginLeft:PropTypes.number.isRequired,
        color:PropTypes.string.isRequired,
        borderRadius:PropTypes.number.isRequired
    }
      
      render = () => {
       return (
          <TouchableOpacity style={{marginRight:this.props.marginRight,
           marginLeft:this.props.marginLeft,
           marginBottom:this.props.marginBottom,
           height:this.props.height,
           width:this.props.width,
           backgroundColor:this.props.backgroundColor,
           justifyContent:'center',
           alignItems:'center',
           marginTop:this.props.marginTop,
           borderRadius:this.props.borderRadius
           
         }}
         onPress={ this.props.onPress}
         
         ><Text style={{color:this.props.color}}>{this.props.title} </Text>

          </TouchableOpacity>
        );
      }
    }


    export default button;