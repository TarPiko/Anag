import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import TextSemiBold from './TextSemiBold';
import { PlusIcon } from '../../assets/icons';

/**
 * Add button
 * @param {string} title
 * @param {object} style
 * @param {function} onPress
 * @param {object} titleStyles
 * @returns {JSX.Element}
 */
const AddButton = ({ title, style, onPress, titleStyles }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, { ...style }]}
      onPress={onPress}
    >
      <PlusIcon />
      <TextSemiBold style={[styles.title, { ...titleStyles }]}>{title}</TextSemiBold>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: SIZE.minIndent,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  title: {
    marginLeft: SIZE.minIndent / 2,
  },
});

export default AddButton;
