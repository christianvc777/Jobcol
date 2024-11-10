import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Header from './Header';
import PlanDetails from './PlanDetails';
import PricingOption from './PricingOption';
import PaymentButton from './PaymentButton';

const P10Screen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header title="Mejorar Plan" />
        <View style={styles.planContainer}>
          <PlanDetails />
          <View style={styles.pricingContainer}>
            <PricingOption
              type="Anual"
              originalPrice="$119.900"
              discountedPrice="$99.900"
            />
            <PricingOption
              type="Mensual"
              originalPrice="$24.900"
              discountedPrice="$14.900"
            />
          </View>
          <PaymentButton navigation={navigation}/>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 480,
    width: '100%',
    paddingHorizontal: 39,
    paddingVertical: 129,
    backgroundColor: '#99c8c8',
  },
  planContainer: {
    borderRadius: 12,
    marginTop: 32,
    width: '100%',
    paddingVertical: 23,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  pricingContainer: {
    width: '100%',
    marginTop: 28,
  },
});

export default P10Screen;