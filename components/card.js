import { StyleSheet, Text, View } from "react-native";

import Color from "../constants/color";
import React from "react";

const Cards = ({children , style}) => {
    return (
        <View style={{...styles.card, ...style}}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: Color.primary,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: Color.third,
        elevation: 5,
        padding: 20,
        borderRadius: 10,
    }
  });
export default Cards;