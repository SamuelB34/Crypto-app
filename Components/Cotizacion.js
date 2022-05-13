import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Cotizacion = ( {end, newValue} ) => {

  if(Object.keys( end ).length === 0) return null;

  return (
    <View style={styles.contenedor}>
      <Text style={[styles.texto, styles.price]}> {end.PRICE}</Text>

      <Text style={styles.texto}> Highest price at day: <Text style={styles.numeros}>{end.HIGHDAY}</Text> </Text>

      <Text style={styles.texto}> Lowest price at day: <Text style={styles.numeros}>{end.LOWDAY}</Text></Text>

      <Text style={styles.texto}> Variation in the last 24 hours: <Text style={styles.numeros}>{end.CHANGEPCT24HOUR} %</Text> </Text>

      <Text style={styles.texto}> Last update: <Text style={styles.numeros}>{end.LASTUPDATE}</Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor:{
      backgroundColor:'#6e4400',
      marginHorizontal:20,
      marginBottom:30,
      borderRadius: 20,
      paddingVertical:20
    },
    texto:{
      color: '#fff',
      fontSize: 15,
      marginVertical:10,
      marginLeft:20,
      fontWeight:'400'
    },
    price:{
      fontSize:37,
      fontWeight:'bold'
    },
    numeros:{
      fontWeight:'bold',
      fontSize:18,
    }

})

export default Cotizacion
