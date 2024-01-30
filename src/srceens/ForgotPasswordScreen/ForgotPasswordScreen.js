import React, { useMemo, useState } from 'react';
import { Keyboard, SafeAreaView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import normalizeFontSize from '../../utils/normalizeFontSize';
import TextSemiBold from '../../components/UI/TextSemiBold';
import TextRegular from '../../components/UI/TextRegular';
import PrimaryInput from '../../components/UI/PrimaryInput';
import PrimaryButton from '../../components/UI/PrimaryButton';
import validateEmail from '../../utils/validateEmail';

/**
 * Forgot password screen
 * @returns {JSX.Element}
 */
const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const toConfirmCode = () => {
    navigation.navigate('ConfirmCodeScreen');
  };

  const disabled = useMemo(() => {
    return !validateEmail(email);
  }, [email]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <TextSemiBold style={styles.title}>Reset password</TextSemiBold>
          <TextRegular style={styles.desc}>
            Enter your email and we’ll send you a code to reset your password
          </TextRegular>
          <TextRegular>Email</TextRegular>
          <PrimaryInput
            placeholder='Enter your email'
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <PrimaryButton
            title='Send code to email'
            style={styles.button}
            disabled={disabled}
            onPress={toConfirmCode}
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
    marginBottom: SIZE.minIndent,
  },
  desc: {
    fontSize: normalizeFontSize(16),
    color: COLORS.fontLight,
    marginBottom: SIZE.minIndent,
  },
  input: {
    marginTop: SIZE.minIndent / 2,
    marginBottom: SIZE.minIndent,
  },
  button: {
    marginTop: SIZE.mediumIndent,
    marginBottom: SIZE.minIndent,
  },
});

export default ForgotPasswordScreen;
