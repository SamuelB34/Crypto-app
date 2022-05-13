import React from 'react';
import {View, Image, StyleSheet, Text, Platform} from 'react-native';

const Header = () => {
  return (
    <View>
        <Text style={styles.texto}> Cryptocurrency</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    texto:{
        fontSize:30,
        textAlign: 'center',
        paddingTop: Platform.OS === 'ios' ? 50 : 20, //Depende de la plataforma, realiza ciertas acciones
        fontFamily: 'RubikGlitch',
        color: '#DB995A',
        fontWeight:'800'
    }
})

export default Header