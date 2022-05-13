import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';



const Formulario = ( {coin, setCoin, crypto, setCrypto, setConsultAPI}) => {

  const [ cryptos, setCryptos ] = useState([]);

  useEffect(() =>{
      const consultAPI = async () =>{
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
        const result = await axios.get(url)
        setCryptos(result.data.Data)
      }
      consultAPI();
  },[])

  const getCoins = coins =>{
    setCoin(coins)
    console.log(coins)
  }

  const getCrypto = crypto =>{
    setCrypto(crypto)
    console.log(crypto)
  }

  const checkPrice = () =>{
    if(crypto.trim() ==='' || coin.trim() === ''){
      emptyAlert();
      return;
    }else{
      setConsultAPI(true)
    }
  }

  const emptyAlert = () =>{
    Alert.alert(
      "Empty fields",
      "There are some empty fields, check before checking the price"
    )
  }


  return (
    <View >
        <View>
            <Text style={styles.text}> Tipo de gasto</Text>

              <Picker 
                style={styles.picker}
                selectedValue = { coin }
                onValueChange = { coins => getCoins(coins)}
                itemStyle={{ height:5 }}
              >
                <Picker.Item label='--Seleccionar--' value=""/>
                <Picker.Item label="USD" value="USD"/>
                <Picker.Item label="MXN" value="MXN"/>
                <Picker.Item label="EUR" value="EUR"/>
                <Picker.Item label="CAD" value="CAD"/>
            </Picker>
        </View>

        <View>
             <Text style={styles.text}> Coin:</Text>

            <Picker 
            style={styles.picker}
            selectedValue = { crypto }
            onValueChange = { cryptos => getCrypto(cryptos)}
            >
                <Picker.Item label='--Seleccionar--' value=""/>
                { cryptos.map( crypto => (
                  <Picker.Item key={ crypto.CoinInfo.Id } label={ crypto.CoinInfo.FullName } value={ crypto.CoinInfo.Name }/>
                ))}
            </Picker>

            <TouchableHighlight
              style={styles.touchable}
              onPress = {() => checkPrice()}
            >
              <Text style={styles.tochableText}> Check Price </Text>
            </TouchableHighlight>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

    text:{
        marginTop: 40,
        marginBottom: 15,
        marginLeft: 30,
        fontSize: 20,
        color: '#e0e0e0',
        fontWeight:'600'
    },
    picker:{
        marginHorizontal:40,
        backgroundColor:'#ebebeb',
        borderRadius:10,
        color: '#404040',
        
    },
    touchable:{
      backgroundColor: '#DB995A',
      padding:18,
      marginHorizontal:20,
      marginTop:45,
      // marginVertical: 45,
      borderRadius:20
    },
    tochableText:{
      fontWeight:'bold',
      fontSize: 18,
      textAlign:'center',
      color:'#fff',
    }
})

export default Formulario