import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextRegular from '../../../components/UI/TextRegular';
import normalizeFontSize from '../../../utils/normalizeFontSize';

const PaymentItem = ({ title, label }) => {
  return (
    <View>
      <TextRegular>{title}</TextRegular>
      <TextRegular style={styles.police}>{label}</TextRegular>
    </View>
  );
};

const styles = StyleSheet.create({
  police: {
    fontSize: normalizeFontSize(10),
  },
});

export default PaymentItem;
