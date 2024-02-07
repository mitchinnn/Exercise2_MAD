import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  StyleSheet, 
  ScrollView 
} from 'react-native';

export const shoppingImages = [
  {
    id: 1,
    url: {
      uri: 'https://img.ws.mms.shopee.co.id/8b38ca960afbb14a8df351bbfa612304',
    },
    title: 'Suzuki',
  },
  {
    id: 2,
    url: {
      uri: 'https://img.ws.mms.shopee.co.id/58154a5c74dee9bffc17a7c789988a1b',
    },
    title: 'Honda',
  },
  
  {
    id: 3,
    url: {
      uri: 'https://motorcycle-logos.com/wp-content/uploads/2016/10/Yamaha-Motor-Logo.png',
    },
    title: 'Yamaha',
  },

  {
    id: 4,
    url: {
      uri: 'https://shop.ducati.com/media/og_image/default/Ducati-shop_1.png',    
    },
    title: 'Ducati',
  },
  // Add more shopping images as needed
];

export default function ShoppingTheme() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 26,
          fontWeight: 'bold',
          color: '#FFFFFF' // Set text color to white
        }}>
        Motoshop
      </Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          placeholder="Search for items"
          placeholderTextColor={'#A4B0BD'}
        />
      </View>
      <ScrollView horizontal={true}>
        {shoppingImages.map(item => {
          return (
            <View style={styles.imageCard} key={item.id}>
              <Image source={item.url} style={styles.image} />
              <Text style={styles.titleStyle}>{item.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', 
    padding: 8,
  },
  imageCard: {
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 100,
  },

  titleStyle: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 6,
    fontStyle: 'italic',
    marginRight: 15,
    color: '#FFFFFF' 
  },
  searchContainer: {
    marginTop: 16, // Add margin from the shopping images
    alignItems: 'center', // Center the search input horizontally
  },
  search: {
    height: 44,
    backgroundColor: '#F1EFEF',
    borderRadius: 16,
    marginTop: 8, // Adjust margin from the search container
    marginBottom: 5,
    paddingHorizontal: 10,
    width: '80%', // Set the width of the search input
    color: '#2F363F',
  }
});
