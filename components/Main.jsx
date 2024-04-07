import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 100,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  placesList: {
    flex: 1,
  },
  placeItem: {
    flexDirection: 'column', // Changed from 'row' to 'column'
    padding: 10,
    flex: 1,
    gap: 10,
    textAlign: 'center',

  },
  placeImage: {
    width: '70%',
    height: 200,
    borderRadius: 5,
    marginLeft: '15%',
    marginTop: 40,
    // marginBottom: 30
  },
  placeInfo: {
    flex: 1,
    // marginLeft: 10,
    marginTop: 20,
    position: 'relative',
  },
  placeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  placeDescription: {
    fontSize: 16,
  },
  allpics: {
    flex: 1,
    flexDirection: 'column', // Ensure this is set to 'column'
    rowGap: 215,
  },
  placeItembox: {
    backgroundColor: 'orange',
  }
});

// Assuming your images are in the `assets/img` folder:
const place1 = {
  name: 'Свято-Троицкий собор',
  image: require('../assets/img_Main/svyato-troick.jpg'), // Relative path
  description: 'Православный храм в Ставрополе, построенный в 1847 году.',
};

const place2 = {
  name: 'Зойкина квартира',
  image: require('../assets/img_Main/zoykina-kvartira.jpg'),
  description: 'Музей-квартира в Москве, посвященная истории русского авангарда.',
};

const place3 = {
  name: 'Арка памяти воинов-миротворцев и героев-ликвидаторов',
  image: require('../assets/img_Main/arka.jpg'),
  description: 'Памятник в Ставрополе, посвященный воинам-миротворцам и героям-ликвидаторам.',
};

const Main = () => {
  const [searchQuery, setSearchQuery] = useState('');
   
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Спланируйте идеальное путешествие</Text>
          </View>
          <View style={{ padding: 10 }}>
            <TextInput
              style={styles.searchInput}
              placeholder="Поиск мест"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
    
          {/* Wrap the event list in a ScrollView */}
          <ScrollView style={styles.allpics}>
            {places.map((place) => (
              <View key={place.id} style={styles.placeItem}>
                <View style={styles.placeItembox}>
                  <Image source={place.image} style={styles.placeImage} />
                  <Text style={styles.placeDescription}>{place.description}</Text>
                  <Text style={styles.placeName}>{place.name}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      );
    };

export default Main;
