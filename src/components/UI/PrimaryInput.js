import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import TextLight from './TextLight';

/**
 * Primary input component
 * @param {string} placeholder - placeholder and label
 * @param {object} style - rewrite styles
 * @param {function} onChangeText - callback function to change text
 * @param {string} keyboardType - the type of keyboard
 * @param {number} maxLength - the maxlength of input
 * @param {string} textContentType - the content type
 * @param {string} value - the value of input
 * @param {boolean} error - is error
 * @param {string} errorMessage - the message of error
 * @param {boolean} multiline
 * @param {object} inputStyles
 * @returns {JSX.Element}
 */
const PrimaryInput = ({
  placeholder,
  style,
  onChangeText,
  keyboardType,
  maxLength,
  textContentType,
  value,
  error,
  errorMessage,
  multiline = false,
  inputStyles,
}) => {
  return (
    <View style={[styles.container, { ...style }]}>
      <View
        style={[
          styles.inputWrapper,
          { borderColor: error ? COLORS.danger : COLORS.lightGrey },
          { ...inputStyles },
        ]}
      >
        <TextInput
          allowFontScaling={false}
          autoCompleteType='off'
          autoCorrect={false}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={COLORS.inactive}
          multiline={multiline}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          maxLength={maxLength}
          textContentType={textContentType}
          autoCapitalize='none'
          value={value}
          selectionColor={COLORS.green}
        />
      </View>
      <View>
        {error && (
          <TextLight numberOfLines={2} style={styles.errorMessage}>
            {errorMessage}
          </TextLight>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    marginHorizontal: SIZE.minIndent,
    flex: 1,
    color: COLORS.dark,
    fontSize: SIZE.fontSize16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    height: 54,
    borderWidth: 1,
    paddingHorizontal: SIZE.minIndent,
  },
  errorMessage: {
    fontSize: SIZE.fontSize12,
    color: COLORS.danger,
  },
});

export default PrimaryInput;
