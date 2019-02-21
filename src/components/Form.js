import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Form extends Component {

  render() {
    return(
      <View style={styles.container}>
        <TextInput style={styles.inputBox} 
                   underlineColorAndroid="rgba(0,0,0,0)"
                   placeholder="Email"
                   placeholderTextColor="#fff"
                   selectionColor="#fff"
                   keyboardType="email-address"
                   onSubmitEditing={() => this.password.focus()}/>

        <TextInput style={styles.inputBox} 
                   underlineColorAndroid="rgba(0,0,0,0)"
                   placeholder="Password"
                   secureTextEntry={true}
                   placeholderTextColor="#fff"
                   ref={(input) => this.password = input}/>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputBox: {
    width: 300,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 15,
    color: "#fff",
    marginVertical: 10
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center"
  },
  button: {
    width: 300,
    backgroundColor: "#FFB300",
    borderRadius: 30,
    marginVertical: 10,
    paddingVertical: 10
  }
});