import React, { useMemo, useState } from 'react';
import {
  Keyboard,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import TextSemiBold from '../../components/UI/TextSemiBold';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import normalizeFontSize from '../../utils/normalizeFontSize';
import TextRegular from '../../components/UI/TextRegular';
import PrimaryInput from '../../components/UI/PrimaryInput';
import PasswordInput from '../../components/UI/PasswordInput';
import TextLight from '../../components/UI/TextLight';
import PrimaryButton from '../../components/UI/PrimaryButton';
import { useRootModel } from '../../models/RootStore';
import validateEmail from '../../utils/validateEmail';

/**
 * Login screen
 * @param {object} navigation
 * @returns {JSX.Element}
 */
const LogInScreen = ({ navigation }) => {
  const {
    user: { userInfo, setIsAuth, isOnBoarding },
  } = useRootModel();

  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(' ');

  const disabled = useMemo(() => {
    let value = true;

    if (validateEmail(input.email) && input.password !== '') {
      value = false;
    }

    return value;
  }, [input.email, input.password]);

  const handleSetInput = (key, value) => {
    setInput(prevState => ({ ...prevState, [key]: value }));
  };

  const handleLogIn = () => {
    if (input.email !== userInfo?.email) {
      return;
    }
    if (input.password !== userInfo?.password) {
      setError('Enter correct password');
      setTimeout(() => {
        setError(' ');
      }, 3000);
      return;
    }
    setIsAuth(true);
    userInfo.setLoggedDate(new Date().toString());
    if (isOnBoarding) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainStack' }],
      });
    } else {
      navigation.navigate('AskPolicyScreen');
    }
  };

  const handleSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  const handleForgot = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <TextSemiBold style={styles.title}>Log In</TextSemiBold>
          <TextRegular>Email</TextRegular>
          <PrimaryInput
            placeholder='Enter your email'
            style={styles.input}
            value={input.email}
            onChangeText={text => handleSetInput('email', text)}
          />
          <TextRegular>Password</TextRegular>
          <PasswordInput
            placeholder='Enter your password'
            style={styles.input}
            maxLength={10}
            value={input.password}
            onChangeText={text => handleSetInput('password', text)}
          />
          <TextLight style={styles.error}>{error}</TextLight>
          <Pressable onPress={handleForgot}>
            <TextLight style={styles.forgot}>Forgot password?</TextLight>
          </Pressable>
          <PrimaryButton
            title='Log In'
            style={styles.button}
            disabled={disabled}
            onPress={handleLogIn}
          />
          <View style={styles.linkSignIn}>
            <TextRegular style={styles.question}>Don’t have an account?</TextRegular>
            <Pressable onPress={handleSignUp}>
              <TextSemiBold style={styles.logIn}>Sign Up</TextSemiBold>
            </Pressable>
          </View>
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
  input: {
    marginTop: SIZE.minIndent / 2,
    marginBottom: SIZE.minIndent,
  },
  forgot: {
    textDecorationLine: 'underline',
  },
  button: {
    marginTop: SIZE.mediumIndent,
    marginBottom: SIZE.minIndent,
  },
  logIn: {
    color: COLORS.green,
    fontSize: normalizeFontSize(16),
    marginLeft: SIZE.minIndent,
  },
  question: {
    fontSize: normalizeFontSize(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkSignIn: {
    flexDirection: 'row',
    marginTop: SIZE.largeIndent,
    justifyContent: 'center',
  },
  error: {
    color: COLORS.danger,
    fontSize: normalizeFontSize(12),
    marginBottom: SIZE.minIndent,
  },
});

export default LogInScreen;
