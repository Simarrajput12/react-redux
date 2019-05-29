

import React,{Component} from 'react';
import{
 Text,
 Image,
 View,

}
from 'react-native';
import PropTypes from 'prop-types';

    class image extends Component {
      
      static propTypes = {
       height:PropTypes.number.isRequired,
       width:PropTypes.number.isRequired,
       source:PropTypes.any.isRequired,
       resizeMode:PropTypes.string.isRequired

        }
      
      render = () => {
       return (
          <Image style={{
            height:this.props.height,
            width:this.props.width,
            resizeMode:this.props.resizeMode}}  
            source={this.props.source}>
      
          </Image>
       
    

         
       )  
      }
    }


    export default image;