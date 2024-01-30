import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextRegular from '../../../components/UI/TextRegular';
import normalizeFontSize from '../../../utils/normalizeFontSize';

const PolicyItem = ({ title, policy }) => {
  return (
    <View>
      <TextRegular>{title}</TextRegular>
      <TextRegular style={styles.police}>Policy No.{policy}</TextRegular>
    </View>
  );
};

const styles = StyleSheet.create({
  police: {
    fontSize: normalizeFontSize(10),
  },
});

export default PolicyItem;
