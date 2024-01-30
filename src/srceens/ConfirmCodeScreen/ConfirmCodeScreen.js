import React, { useMemo, useState } from 'react';
import {
  Keyboard,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import TextSemiBold from '../../components/UI/TextSemiBold';
import TextRegular from '../../components/UI/TextRegular';
import PrimaryButton from '../../components/UI/PrimaryButton';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import normalizeFontSize from '../../utils/normalizeFontSize';
import { BigSuccess } from '../../assets/icons';
import TextLight from '../../components/UI/TextLight';

const CELL_COUNT = 4;

/**
 * Confirm code screen
 * @returns {JSX.Element}
 */
const ConfirmCodeScreen = ({ navigation }) => {
  const [value, setValue] = useState('');

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const disabled = useMemo(() => {
    return value === '' || value.length !== 4;
  }, [value]);

  const confirmCode = () => {
    navigation.navigate('AddNewPassScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <View style={styles.resendBlock}>
            <BigSuccess />
            <TextSemiBold style={styles.title}>Email was sent!</TextSemiBold>
          </View>
          <TextRegular style={styles.text}>Please fill in the code from email</TextRegular>

          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType='number-pad'
            textContentType='oneTimeCode'
            renderCell={({ index, symbol, isFocused }) => (
              <View
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                <TextSemiBold style={styles.code}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </TextSemiBold>
              </View>
            )}
          />

          <View style={styles.resendBlock}>
            <TextRegular>Didn’t receive code?</TextRegular>
            <Pressable>
              <TextLight style={styles.resend}>Resend</TextLight>
            </Pressable>
          </View>
          <PrimaryButton
            title='Submit'
            style={styles.button}
            disabled={disabled}
            onPress={confirmCode}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light,
    flex: 1,
    justifyContent: 'space-between',
  },
  wrapper: {
    flex: 1,
    padding: SIZE.mediumIndent,
  },
  title: {
    fontSize: normalizeFontSize(25),
    marginLeft: SIZE.minIndent,
  },
  text: {
    fontSize: normalizeFontSize(16),
    color: COLORS.fontLight,
    marginVertical: SIZE.minIndent,
  },
  input: {
    marginTop: SIZE.minIndent / 2,
    marginBottom: SIZE.minIndent,
  },
  button: {
    marginTop: SIZE.mediumIndent,
    marginBottom: SIZE.minIndent,
  },
  resendBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resend: {
    textDecorationLine: 'underline',
    marginLeft: SIZE.minIndent / 2,
  },

  codeFieldRoot: {
    marginVertical: SIZE.mediumIndent,
    marginRight: SIZE.largeIndent,
  },
  cell: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 54,
    height: 54,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  focusCell: {
    borderColor: COLORS.green,
  },
  code: {
    fontSize: normalizeFontSize(25),
  },
});

export default ConfirmCodeScreen;
