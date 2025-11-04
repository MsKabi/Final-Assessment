import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../constants/colors';

const Onboarding3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/01-Onboarding Page/onboarding3.png')} 
        style={styles.image} 
      />
      
      <View style={styles.content}>
        <Text style={styles.title}>Best Prices Guaranteed</Text>
        <Text style={styles.description}>
          Get the best deals and exclusive offers. 
          We guarantee you'll find the perfect stay at the perfect price.
        </Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.getStartedButton}
            onPress={() => navigation.getParent()?.navigate('SignIn')}
          >
            <Text style={styles.getStartedText}>Get Started</Text>
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
  getStartedButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 60,
    paddingVertical: 16,
    borderRadius: 30,
  },
  getStartedText: {
    color: colors.light,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Onboarding3;