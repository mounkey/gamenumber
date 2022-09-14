import { StyleSheet, Text } from "react-native";

import Color from "../constants/color";
import React from "react";

const TextBox = ({stryle, ...props}) => {
    return (
        <Text style={{...styles.text, ...stryle}} {...props} />
    )
}

export default TextBox; 

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: Color.letter, 
        borderBottomColor: Color.primary,
        borderBottomWidth: 1,
    }
});