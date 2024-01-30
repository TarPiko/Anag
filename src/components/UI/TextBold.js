import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { STYLES } from '../../constants/defaultStyles';

const TextBold = ({ children, style, numberOfLines }) => {
  return (
    <Text
      style={[styles.text, STYLES.defaultText, style]}
      allowFontScaling={false}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Bold',
  },
});

export default TextBold;
