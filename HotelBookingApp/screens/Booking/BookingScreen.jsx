import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { colors } from '../../constants/colors';

const Booking = ({ navigation, route }) => {
  const { hotel } = route.params;
  const [checkIn, setCheckIn] = useState('2024-01-15');
  const [checkOut, setCheckOut] = useState('2024-01-20');
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);

  const totalNights = 5; // Calculate based on dates
  const totalPrice = hotel.price * totalNights * rooms;

  const handleConfirmBooking = () => {
    Alert.alert(
      'Booking Confirmed!',
      `Your booking at ${hotel.name} has been confirmed. Total: $${totalPrice}`,
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('BookingSuccess', { 
            hotel, 
            bookingDetails: { checkIn, checkOut, guests, rooms, totalPrice } 
          })
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={hotel.image} style={styles.hotelImage} />
      
      <View style={styles.content}>
        <Text style={styles.hotelName}>{hotel.name}</Text>
        <Text style={styles.hotelLocation}>{hotel.location}</Text>
        
        <View style={styles.bookingDetails}>
          <Text style={styles.sectionTitle}>Booking Details</Text>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Check-in</Text>
            <Text style={styles.detailValue}>{checkIn}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Check-out</Text>
            <Text style={styles.detailValue}>{checkOut}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Guests</Text>
            <Text style={styles.detailValue}>{guests}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Rooms</Text>
            <Text style={styles.detailValue}>{rooms}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Total Nights</Text>
            <Text style={styles.detailValue}>{totalNights}</Text>
          </View>
        </View>

        <View style={styles.priceSummary}>
          <Text style={styles.sectionTitle}>Price Summary</Text>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>${hotel.price} x {totalNights} nights x {rooms} rooms</Text>
            <Text style={styles.priceValue}>${totalPrice}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>${totalPrice}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.bookButton} onPress={handleConfirmBooking}>
          <Text style={styles.bookButtonText}>Confirm Booking</Text>
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
    height: 250,
  },
  content: {
    padding: 20,
  },
  hotelName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: 8,
  },
  hotelLocation: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 20,
  },
  bookingDetails: {
    backgroundColor: colors.lightGray,
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 16,
    color: colors.gray,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.dark,
  },
  priceSummary: {
    backgroundColor: colors.lightGray,
    padding: 16,
    borderRadius: 12,
    marginBottom: 30,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  priceLabel: {
    fontSize: 14,
    color: colors.gray,
  },
  priceValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.dark,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.dark,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  bookButton: {
    backgroundColor: colors.primary,
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  bookButtonText: {
    color: colors.light,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Booking;