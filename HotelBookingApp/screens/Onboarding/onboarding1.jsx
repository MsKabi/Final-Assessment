import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../constants/colors';

const Onboarding1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/01-Onboarding Page/onboarding1.png')} 
        style={styles.image} 
      />
      
      <View style={styles.content}>
        <Text style={styles.title}>Discover Amazing Hotels</Text>
        <Text style={styles.description}>
          Find and book the perfect hotel for your next adventure. 
          Explore thousands of properties worldwide.
        </Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.nextButton}
            onPress={() => navigation.navigate('Onboarding2')}
          >
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.skipButton}
            onPress={() => navigation.getParent()?.navigate('SignIn')}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  image: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: colors.dark,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.gray,
    lineHeight: 24,
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 60,
    paddingVertical: 16,
    borderRadius: 30,
    marginBottom: 20,
  },
  nextText: {
    color: colors.light,
    fontSize: 18,
    fontWeight: 'bold',
  },
  skipButton: {
    padding: 12,
  },
  skipText: {
    color: colors.gray,
    fontSize: 16,
  },
});

export default Onboarding1;