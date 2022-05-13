import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, Image, ScrollView, ActivityIndicator} from 'react-native';
import Formulario from './Components/Formulario';
import Header from './Components/Header';
import axios from 'axios';
import Cotizacion from './Components/Cotizacion';


const App = () => {

  
  const [ coin, setCoin ] = useState('');
  const [ crypto, setCrypto ] = useState('');
  const [ consultAPI, setConsultAPI ] = useState(false)
  const [ end, setEnd ] = useState({})
  const [ newValue, setNewValue] = useState('')
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    const checkPriceCrypto = async () => {
      if(consultAPI){
        const url =  `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin} `
        const result = await axios.get(url);

        setLoading(true)
        
        // Adding spinner that will help us to add a coolest view
        setTimeout(() => {
          setEnd( result.data.DISPLAY [crypto][coin] );

          setConsultAPI( false );
          setNewValue(coin);

          setLoading(false)
        }, 1500)

      }
    }
    checkPriceCrypto();

  }, [consultAPI])


  const component = loading ? <ActivityIndicator size="large" color="#DB995A"/>
  :<Cotizacion 
      end = {end}
      newValue = {newValue}
    />


  return (
    <ScrollView style={styles.contenedorP}>
      <View>

        <Image 
          style={styles.imagen}
          source={require ('./assets/cryptoImg.png')}
        />
        
        <Header />

        <Formulario 
          coin = {coin}
          setCoin = {setCoin}
          crypto = {crypto}
          setCrypto = {setCrypto}
          setConsultAPI = {setConsultAPI}
        />
        <View style = {styles.spinner}>
          {component}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contenedorP:{
    backgroundColor: '#5c5c5c',
    flex:1,
  },
  imagen:{
    width:'100%',
    height:200
  },
  spinner:{
    marginVertical:45
  }
 
});

export default App;
