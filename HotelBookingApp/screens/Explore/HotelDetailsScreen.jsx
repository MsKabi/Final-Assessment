import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../constants/colors';

const HotelDetails = ({ navigation, route }) => {
  const { hotel } = route.params;

  const features = [
    'Free WiFi',
    'Swimming Pool',
    'Spa',
    'Restaurant',
    'Fitness Center',
    'Air Conditioning'
  ];

  const reviews = [
    { id: 1, user: 'John D.', rating: 5, comment: 'Amazing stay! Beautiful views and great service.' },
    { id: 2, user: 'Sarah M.', rating: 4, comment: 'Very comfortable rooms and friendly staff.' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Image source={hotel.image} style={styles.hotelImage} />
      
      <View style={styles.content}>
        <Text style={styles.hotelName}>{hotel.name}</Text>
        <Text style={styles.hotelLocation}>{hotel.location}</Text>
        
        <View style={styles.ratingPriceContainer}>
          <Text style={styles.rating}>⭐ {hotel.rating}</Text>
          <Text style={styles.price}>${hotel.price}/night</Text>
        </View>
        
        <Text style={styles.description}>
          Experience luxury and comfort at our beautiful hotel. Enjoy stunning views, 
          premium amenities, and exceptional service that will make your stay unforgettable.
        </Text>

        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Hotel Features</Text>
          <View style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <Text style={styles.featureText}>✓ {feature}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.reviewsSection}>
          <Text style={styles.sectionTitle}>Guest Reviews</Text>
          {reviews.map(review => (
            <View key={review.id} style={styles.reviewItem}>
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewUser}>{review.user}</Text>
                <Text style={styles.reviewRating}>⭐ {review.rating}</Text>
              </View>
              <Text style={styles.reviewComment}>{review.comment}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity 
          style={styles.bookButton}
          onPress={() => navigation.navigate('Booking', { hotel })}
        >
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  hotelImage: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 20,
  },
  hotelName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: 8,
  },
  hotelLocation: {
    fontSize: 18,
    color: colors.gray,
    marginBottom: 16,
  },
  ratingPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  rating: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.dark,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.gray,
    marginBottom: 30,
  },
  featuresSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: 16,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureItem: {
    width: '48%',
    marginBottom: 12,
  },
  featureText: {
    fontSize: 14,
    color: colors.dark,
  },
  reviewsSection: {
    marginBottom: 30,
  },
  reviewItem: {
    backgroundColor: colors.lightGray,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewUser: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.dark,
  },
  reviewRating: {
    fontSize: 14,
    color: colors.dark,
  },
  reviewComment: {
    fontSize: 14,
    color: colors.gray,
    lineHeight: 20,
  },
  bookButton: {
    backgroundColor: colors.primary,
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  bookButtonText: {
    color: colors.light,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HotelDetails;