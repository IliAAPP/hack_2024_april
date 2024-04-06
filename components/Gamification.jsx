import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  const [postLink, setPostLink] = useState('');

  const handleLinkSubmit = () => {
    // Handle the submission of the VK post link
    console.log('Submitted link:', postLink);
    // You can implement further logic here (e.g., opening the link, processing bonuses, etc.)
  };

  return (
    <View style={styles.header}>
      {/* Balance and VK post input */}
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
      {/* Profile icon */}
      <View style={styles.profileIcon}>
        {/* Insert profile icon here */}
        <Icon name="account" size={30} color="black" />
      </View>
      {/* Chest icon */}
      <View style={styles.chestIcon}>
        <Icon name="treasure-chest" style={styles.chestIcon} size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  balanceContainer: {
    flexDirection: 'column',
  },
  balanceTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    top:100,
    right: 25,
    flex:1,
    flexDirection: 'col',
    
    
    // backgroundColor: 'white',
  },
  balanceText: {
    color: 'white',
    marginRight: 8,
    fontStyle: 'italic'
  },
  chestIcon: {
    width: 25,
    height: 24,
    backgroundColor: 'orange',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1, // Allow TextInput to fill available space
  },
});

export default Header;
