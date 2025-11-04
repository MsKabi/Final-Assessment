import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { colors } from '../../constants/colors';

const Explore = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const hotels = [
    {
      id: '1',
      name: 'Luxury Resort & Spa',
      location: 'Bali, Indonesia',
      price: 299,
      rating: 4.8,
      image: require('../../assets/images/10-Hotel Detail Page/hotel1.jpg'),
    },
    {
      id: '2',
      name: 'City Center Hotel',
      location: 'New York, USA',
      price: 199,
      rating: 4.5,
      image: require('../../assets/images/10-Hotel Detail Page/hotel2.jpg'),
    },
    {
      id: '3',
      name: 'Beachfront Paradise',
      location: 'Maldives',
      price: 399,
      rating: 4.9,
      image: require('../../assets/images/10-Hotel Detail Page/hotel3.jpg'),
    },
  ];

  const renderHotelCard = ({ item }) => (
    <TouchableOpacity
      style={styles.hotelCard}
      onPress={() => navigation.navigate('HotelDetails', { hotel: item })}
    >
      <Image source={item.image} style={styles.hotelImage} />
      <View style={styles.hotelInfo}>
        <Text style={styles.hotelName}>{item.name}</Text>
        <Text style={styles.hotelLocation}>{item.location}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>⭐ {item.rating}</Text>
          <Text style={styles.price}>${item.price}/night</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/06-Explore Page/explore-bg.png')} 
        style={styles.backgroundImage} 
      />
      
      <View style={styles.content}>
        <Text style={styles.header}>Find Your Perfect Stay</Text>
        
        <TextInput
          style={styles.searchInput}
          placeholder="Search hotels or locations..."
          placeholderTextColor={colors.gray}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        
        <FlatList
          data={hotels}
          renderItem={renderHotelCard}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    position: 'absolute',
    top: 0,
  },
  content: {
    flex: 1,
    marginTop: 150,
    backgroundColor: colors.light,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: 20,
    textAlign: 'center',
  },
  searchInput: {
    backgroundColor: colors.lightGray,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
    color: colors.dark,
    marginBottom: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
  hotelCard: {
    backgroundColor: colors.light,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  hotelImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  hotelInfo: {
    padding: 16,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: colors.dark,
  },
  hotelLocation: {
    color: colors.gray,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rating: {
    fontWeight: 'bold',
    color: colors.dark,
  },
  price: {
    fontWeight: 'bold',
    color: colors.primary,
  },
});

export default Explore;