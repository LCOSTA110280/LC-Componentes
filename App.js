import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, TouchableOpacity, Alert, ScrollView, FlatList } from 'react-native';
import Pessoa from './src/Pessoa';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      feed : [
        {id:'1',nome:'Leonardo',idade:42,email:'leo@leo.com'},
        {id:'2',nome:'Joao',idade:22,email:'joao@joao.com'},
        {id:'3',nome:'Lucio',idade:32,email:'lucio@lucio.com'},
        {id:'4',nome:'Denis',idade:29,email:'denis@denis.com'},
        {id:'5',nome:'Lucas',idade:39,email:'lucas@lucas.com'},
      ] 
    }
    
  }

  render(){  
  return (
    <View style={styles.container}>
      <FlatList
        data={this.state.feed}
        renderItem={({item})=> <Pessoa data={item}></Pessoa>}
       // keyExtractor={({item})=>item.id}
     ></FlatList>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:15,
  },
    
})

export default App;


