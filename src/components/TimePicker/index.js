
const curentdate=new Date();
import React, { Component } from 'react'
import TimePicker from 'react-native-simple-time-picker';
import PropTypes from 'prop-types';
export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:curentdate}
  }
  static propTypes = {
    height:PropTypes.number.isRequired,
    width:PropTypes.number.isRequired,
    selectedHours:PropTypes.number.isRequired,
    selectedMinutes:PropTypes.number.isRequired,
    onChange:PropTypes.func.isRequired,
    justifyContent:PropTypes.string.isRequired,
    alignItems:PropTypes.string.isRequired
    
}

  render(){
    return (
      <TimePicker
        style={{width: this.props.width, 
        justifyContent:this.props.justifyContent,
        alignItems:this.props.alignItems}}
        selectedHours={this.props.selectedHours}
        selectedMinutes={this.props.selectedMinutes}
        onChange={this.props.onChange}
      />
    )
  }
}