import { Button, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useState }from "react";

import Card from "../components/card";
import Color from "../constants/color";
import TextBox from "../components/textBox";
import structure from "../constants/structure";

const StartGame = () => {
  const [number, setNumber] = useState('');

  const onHandleChange = (text) => {
      setNumber(text.replace(/[^0-9]/g, ''));
  }

  const onReset = () => {
      setNumber('');
      Keyboard.dismiss()
  }

    return (  
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
        <Text style={styles.title}>Comenzar juego</Text>
        <Card style={styles.inputContainer}>
            <Text style={styles.label}>Elija un numero</Text>
            <TextBox 
                style={styles.input} 
                keyboardType='numeric' 
                maxLength={2}
                blurOnSubmit
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={(text) => onHandleChange(text)}
                value={number}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Limpiar"
                    onPress={onReset}
                    color={Color.primary}
                />
                <Button
                    title="Confirmar"
                    onPress={() => null}
                    color={Color.secondary}
                />
            </View>
        </Card>
    </View>
    </TouchableWithoutFeedback>
       
    )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      marginVertical: 10,
  },
  title: {
      fontSize: 20,
      color: Color.letter,
      textAlign: 'center',
      paddingVertical: 20,
  },
  label: {
      fontSize: 14,
      color: Color.letter,      
      textAlign: 'center',
      paddingVertical: 5, 
  },
  inputContainer: {
      width: 320,
      maxWidth: '80%',
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
  },
  input: {
      width: '100%',
      borderBottomColor: Color.primary,
      borderBottomWidth: 1,
      maxWidth: 70,
      fontSize: 25,
      paddingVertical: 10,
      textAlign: 'center',
  },
  buttonContainer: {
      width: '75%',
      marginHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
  }
});

export default StartGame;