import { Dimensions, StyleSheet } from 'react-native';
import normalizeFontSize from '../utils/normalizeFontSize';

const { width } = Dimensions.get('window');

const SIZE = {
  fontSize12: normalizeFontSize(12),
  fontSize14: normalizeFontSize(14),
  fontSize16: normalizeFontSize(16),
  minIndent: width * 0.03,
  mediumIndent: width * 0.06,
  largeIndent: width * 0.09,
};

const COLORS = {
  dark: '#2A2B2A',
  light: '#ffffff',
  green: '#58D504',
  greenLight: '#F6FFF0',
  greenMedium: '#EBFFDE',
  danger: '#DF3737',
  icon: '#B0B3AE',
  disabled: '#808798',
  inactive: '#d0e0d0',
  lightGrey: '#E3E5E0',
  border: '#F1F2F0',
  fontLight: '#6C6E6B',
  orangeLight: '#FFF4DE',
  orange: '#F5A814',
};

const HIT_SLOP = {
  top: 20,
  bottom: 20,
  left: 20,
  right: 20,
};

const STYLES = StyleSheet.create({
  defaultText: {
    fontSize: SIZE.fontSize14,
    color: COLORS.dark,
  },
});

export { SIZE, COLORS, HIT_SLOP, STYLES };
