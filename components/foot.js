import  {Image, StyleSheet, Text, View}  from  'react-native' ;

import Color from "../constants/color";
import React from 'react';
import structure from '../constants/structure';

const styles = StyleSheet.create({
    footer: {
        height: 80,
        justifyContent: 'center',
        alignContent: 'flex-end',
        backgroundColor: Color.third,
        paddingTop: 5,
 
    },

    imageContainer: {
      justifyContent: 'flex-start',
      alignItems: 'center',
    },


    text: {
        fontSize: structure.fontSmall,
        color: Color.letter,
    },

  });

  const Footer = () => {
    return (
        <View style={styles.footer}>
          <View style= {styles.imageContainer}>
            <Text style={styles.text}> 2020 Mounkey</Text>
            <Image source={{ uri: 'https://mounkey.cl/img/mat/imgmkywinic.png'}} style={{width: 35, height: 35}} />
          </View>
         
        </View>
    )
  }
export default Footer;  
