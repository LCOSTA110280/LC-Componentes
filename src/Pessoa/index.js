import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';


class Pessoa extends Component{
    render(){
      return(
        <View style={styles.areaPesssoa }>
          <Text style={styles.textoPessoa} >Nome: {this.props.data.nome}</Text>
          <Text style={styles.textoPessoa} >Idade: {this.props.data.idade}</Text>
          <Text style={styles.textoPessoa} >Email: {this.props.data.email}</Text>
  
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    areaPesssoa:{
        backgroundColor: 'blue',
        height:250,
        marginBottom:20,
      },
      textoPessoa:{
        backgroundColor:'white',
        fontSize:25
      }
    
  })

  export default Pessoa;

  