import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ListView
} from 'react-native';
import ItemListView from './components/ItemListView'
import Blink from './components/Blink'
import TextStyle from './styles/TextStyle'

export default class TasteOfReactNative extends Component {
  constructor(props){
    super(props);
    this.state = {text: ''};
  }

  render() {
  let pic = {
      uri: 'https://zhaoc.github.io/assets/images/raw/image-5.jpg'
    };

 var myData = 'TODO';

    return (
      <ScrollView style={{flex:1}}>
        <View style={{flex: 3, backgroundColor: 'powderblue'}}>
          <Image source={pic} style={{width: 450, height: 290}}/>
        </View>
        <View style={{flex:1, backgroundColor: 'skyblue'}}>
          <TextInput 
            style={{height: 40}} 
            placeholder="Type here!" 
            onChangeText={(text) => this.setState({text})}
          />
        </View>
        <ItemListView />
        <Blink text='I am blinking' />
      </ScrollView>
    );
  }
}