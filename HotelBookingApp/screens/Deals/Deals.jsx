import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from '../../constants/colors';

const Deals = ({ navigation }) => {
  const deals = [
    {
      id: '1',
      title: 'Summer Special',
      description: 'Get 20% off on all beach resorts',
      discount: '20% OFF',
      image: require('../../assets/images/10-Hotel Detail Page/hotel1.jpg'),
    },
    {
      id: '2',
      title: 'Weekend Getaway',
      description: 'Perfect weekend packages starting at $99',
      discount: '30% OFF',
      image: require('../../assets/images/10-Hotel Detail Page/hotel2.jpg'),
    },
    {
      id: '3',
      title: 'Luxury Escape',
      description: 'Premium suites with breakfast included',
      discount: '15% OFF',
      image: require('../../assets/images/10-Hotel Detail Page/hotel3.jpg'),
    },
  ];

  const renderDealItem = ({ item }) => (
    <TouchableOpacity style={styles.dealCard}>
      <Image source={item.image} style={styles.dealImage} />
      <View style={styles.dealInfo}>
        <Text style={styles.dealTitle}>{item.title}</Text>
        <Text style={styles.dealDescription}>{item.description}</Text>
        <Text style={styles.discount}>{item.discount}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Special Deals</Text>
      <Text style={styles.subtitle}>Exclusive offers just for you</Text>
      
      <FlatList
        data={deals}
        renderItem={renderDealItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray,
    textAlign: 'center',
    marginBottom: 30,
  },
  listContent: {
    paddingBottom: 20,
  },
  dealCard: {
    backgroundColor: colors.light,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  dealImage: {
    width: '100%',
    height: 150,
  },
  dealInfo: {
    padding: 16,
  },
  dealTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: 8,
  },
  dealDescription: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 8,
  },
  discount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
});

export default Deals;