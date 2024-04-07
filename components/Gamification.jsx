import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  const [postLink, setPostLink] = useState('');

  const handleLinkSubmit = () => {
    console.log('Submitted link:', postLink);
  };

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.inputContainer}>
          <View style={styles.balanceTextContainer}>
            <Text style={styles.balanceText}>Баланс:</Text>
            <Text style={styles.balanceValue}>100 бонусов</Text>
          </View>
          <View style={styles.textInputRow}>
            <TextInput
              style={styles.input}
              placeholder="Вставьте ссылку на пост ВКонтакте"
              onChangeText={setPostLink}
              value={postLink}
            />
            <TouchableOpacity onPress={handleLinkSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Отправить</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.profileIcon}>
          <Icon name="account" size={30} color="black" />
        </View>
        <View style={styles.chestIcon}>
          <Icon name="treasure-chest" style={styles.chestIcon} size={30} />
        </View>
      </View>
        <TouchableOpacity onPress={() => { /* Handle link press here */ }}>
        <View style={styles.auto_fix_main}>
          <Icon name="auto-fix" style={styles.auto_fix} size={30} />
        </View>
        <Text style={styles.conditionsLink}>Условия программы:</Text>
        
        
        
        
        <Text style={styles.conditions}>Получай бонусы за то, что делишься впечатлениями о путешествиях в соц.сетях!</Text>
        <Text style={styles.conditions}>Оставляй ссылку на свой пост и жди поступления бонусов!</Text>
        <Text style={styles.conditions}>Бонусы приходят в течение 3 дней</Text>

      </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  auto_fix_main: {
    top:175,
    left: 60
    
  },
  auto_fix: {
    
    
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },

  conditions: {
    marginTop: 20,
    marginLeft: 25,
    fontFamily: 'mt-light',
   
    
  },
  conditionsLink: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    marginTop: 150,
    fontFamily:'mt-bold'
  
  },
    submitButton: {
        backgroundColor: '#009000',
        borderRadius: 5,
        padding: 10,
        marginLeft: 10,

    
    },
  header: {
    backgroundColor: 'orange',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', // Move content to right
    paddingHorizontal: 16,
  },
  profileIcon: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 350,
    bottom:8
  },
  balanceContainer: {
    flexDirection: 'column',
  },
  balanceTextContainer: {
    
    flexDirection: 'row',
    alignItems: 'center',
    top: 40,
    left: 93,
  },
  textInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    top:100,
    right: 25,
    flex:1,
    flexDirection: 'col',
},
  balanceText: {
    color: 'white',
    marginRight: 8,
    fontFamily: 'mt-bold',
    right: 3
  },
  chestIcon: {
    width: 25,
    height: 24,
    backgroundColor: 'orange',
    borderRadius: 12,
    top: 3

  },
  input: {
    flex: 1, 
    
  },
});

export default Header;
