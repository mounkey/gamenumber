import { StyleSheet, Text, View } from "react-native";

import Color from "../constants/color";
import { Colors } from "react-native/Libraries/NewAppScreen";
import React from "react";
import structure from "../constants/structure";

const styles = StyleSheet.create({
    header: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.third,
        fontSize: structure.fontLarge,
        paddingTop: 20,
    },

    date: {
        top: 5,
        fontSize: structure.fontSmall,
        color: Color.letter,
    },

    title: {
        fontSize: 20,
        color: Color.letter,
        fontWeight: 'bold',
    },
});

const date = () => {
    const date = Date.now();
    const hoy = new Date(date);
    const day = hoy.toDateString();
    return day;
}

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <View>
              <Text style= {styles.date}>{date()}</Text>
           </View>
        </View>
    )
}

export default Header;

