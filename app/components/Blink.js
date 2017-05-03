import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text
} from 'react-native';
import TextStyle from '../styles/TextStyle'

export default class Blink extends Component{
  constructor(props){
    super(props);
    this.state = {showText: true};

    //Toggle the state every second
    setInterval(() =>{
      this.setState({showText: !this.state.showText});
    }, 1000);
  }
  render(){
    let display = this.state.showText ? this.props.text: '';
    return(<Text style={TextStyle.blinkText} >{display}</Text>);
  }
}