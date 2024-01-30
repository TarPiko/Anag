import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SIZE, COLORS, HIT_SLOP } from '../../constants/defaultStyles';
import { ClosedEyeIcon, OpenedEyeIcon } from '../../assets/icons';
import TextLight from './TextLight';

/**
 * Password input component
 * @param {string} placeholder - placeholder and label
 * @param {object} style - rewrite styles
 * @param {function} onChangeText - callback function to change text
 * @param {string} keyboardType - the type of keyboard
 * @param {boolean} error - has error
 * @param {string} errorMessage
 * @param {number} maxLength - the maxlength of input
 * @param {string} textContentType - the content type
 * @param {string} value - the value of input
 * @param {function} onBlur
 * @returns {JSX.Element}
 */
const PasswordInput = ({
  placeholder,
  style,
  onChangeText,
  keyboardType,
  error,
  errorMessage,
  maxLength,
  textContentType,
  value,
  onBlur,
}) => {
  const [hide, setHide] = useState(true);

  return (
    <View style={[styles.container, { ...style }]}>
      <View
        style={[styles.inputWrapper, { borderColor: error ? COLORS.danger : COLORS.lightGrey }]}
      >
        <TextInput
          autoCompleteType='off'
          autoCorrect={false}
          allowFontScaling={false}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={COLORS.inactive}
          multiline={false}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          maxLength={maxLength}
          textContentType={textContentType}
          autoCapitalize='none'
          value={value}
          selectionColor={COLORS.green}
          secureTextEntry={hide}
          onBlur={onBlur}
        />
        <TouchableOpacity onPress={() => setHide(!hide)} hitSlop={HIT_SLOP} activeOpacity={0.8}>
          {hide ? <ClosedEyeIcon /> : <OpenedEyeIcon />}
        </TouchableOpacity>
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
    paddingHorizontal: SIZE.mediumIndent,
  },
  errorMessage: {
    fontSize: SIZE.fontSize12,
    color: COLORS.danger,
  },
});

export default PasswordInput;
