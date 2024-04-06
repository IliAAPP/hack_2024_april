import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    width: 300,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#ffa500",
    borderRadius: 15,
  },
  sberpay_png: {
    width: 210,
    height: 100,
    marginBottom: 20,
    
  },
  unionpay_png: {
    width: 210,
    height: 100,
    marginBottom: 20,

  },
  // buttonBack: {
  //   borderRadius: 15,
  //   marginBottom: 20,
  // }
});

const PaymentScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [email, setEmail] = useState('');

  const navigation = useNavigation();

  const handlePay = () => {

    navigation.navigate('Success');
  };


    const loadScene = () => {
      navigation.goBack();
    }


  return (
    <View style={styles.container}>
      {/* <Button title='Вернуться назад' onPress={loadScene} style={styles.buttonBack} /> */}
      <Image source={require('../img_Pay/sberpay2.png')} style={styles.sberpay_png}></Image>
      <Image source={require('../img_Pay/unionpay_png.png')} style={styles.unionpay_png}></Image>
      
      <TextInput
        style={styles.input}
        placeholder="Номер карты"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Месяц"
        value={expirationMonth}
        onChangeText={setExpirationMonth}
      />
      <TextInput
        style={styles.input}
        placeholder="Год"
        value={expirationYear}
        onChangeText={setExpirationYear}
      />
      <TextInput
        style={styles.input}
        placeholder="CVC/CVV"
        value={cvc}
        onChangeText={setCvc}
      />
      <TextInput
        style={styles.input}
        placeholder="Электронная почта"
        value={email}
        onChangeText={setEmail}
      />

      <Button title="Оплатить" onPress={handlePay} style={styles.button} />
    </View>
  );
};

export default PaymentScreen;
