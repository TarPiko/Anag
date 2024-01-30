import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LoaderSmall from '../Loaders/LoaderSmall';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import TextSemiBold from './TextSemiBold';

/**
 * Primary button
 * @param {boolean} disabled
 * @param {string} title
 * @param {object} style
 * @param {function} onPress
 * @param {object} titleStyles
 * @param {boolean} loading
 * @returns {JSX.Element}
 */
const PrimaryButton = ({ disabled, title, style, onPress, titleStyles, loading }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={loading || disabled}
      style={[
        styles.container,
        { backgroundColor: disabled || loading ? COLORS.inactive : COLORS.green },
        { ...style },
      ]}
      onPress={onPress}
    >
      {loading ? (
        <LoaderSmall />
      ) : (
        <TextSemiBold
          style={[
            styles.title,
            { color: disabled ? COLORS.disabled : COLORS.light, ...titleStyles },
          ]}
        >
          {title}
        </TextSemiBold>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  title: {
    fontSize: SIZE.fontSize16,
  },
});

export default PrimaryButton;
