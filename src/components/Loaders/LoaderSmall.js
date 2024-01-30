import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/defaultStyles';

/**
 * Small loader indicator
 * @returns {JSX.Element}
 */
const LoaderSmall = () => {
  return (
    <View style={styles.center}>
      <ActivityIndicator size='small' color={COLORS.disabled} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoaderSmall;
