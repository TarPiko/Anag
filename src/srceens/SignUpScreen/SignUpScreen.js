import React, { useMemo, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TextSemiBold from '../../components/UI/TextSemiBold';
import normalizeFontSize from '../../utils/normalizeFontSize';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import TextRegular from '../../components/UI/TextRegular';
import PrimaryInput from '../../components/UI/PrimaryInput';
import PrimaryButton from '../../components/UI/PrimaryButton';
import TextLight from '../../components/UI/TextLight';
import PasswordInput from '../../components/UI/PasswordInput';
import validateEmail from '../../utils/validateEmail';
import { useRootModel } from '../../models/RootStore';

/**
 * Sign Up screen
 * @param {object} navigation
 * @returns {JSX.Element}
 */
const SignUpScreen = ({ navigation }) => {
  const {
    user: { setIsAuth, setUserInfo, isOnBoarding },
  } = useRootModel();

  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    pass1: '',
    pass2: '',
  });
  const [errorPass2, setError] = useState(false);

  const { firstName, lastName, email, pass1, pass2 } = input;

  const disabled = useMemo(() => {
    let value = true;

    if (firstName && lastName && validateEmail(email) && pass1 === pass2) {
      value = false;
    }
    if (pass1 === '' || pass2 === '') {
      value = true;
    }

    return value;
  }, [firstName, lastName, email, pass1, pass2]);

  const handleSetInput = (key, value) => {
    setInput({ ...input, [key]: value });
  };

  const handleOnBlur = () => {
    if (pass1 !== pass2) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleLogIn = () => {
    navigation.navigate('LogInScreen');
  };

  const handleSignUp = () => {
    setIsAuth(true);
    setUserInfo({ ...input, password: input.pass1, lastLogged: new Date().toString() });
    if (isOnBoarding) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainStack' }],
      });
    } else {
      navigation.navigate('AskPolicyScreen');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.wrapper}>
          <TextSemiBold style={styles.title}>Sign Up</TextSemiBold>
          <TextRegular>First Name</TextRegular>
          <PrimaryInput
            placeholder='Enter your first name'
            style={styles.input}
            value={firstName}
            onChangeText={text => handleSetInput('firstName', text)}
          />
          <TextRegular>Last Name</TextRegular>
          <PrimaryInput
            placeholder='Enter your last name'
            style={styles.input}
            value={lastName}
            onChangeText={text => handleSetInput('lastName', text)}
          />
          <TextRegular>Email</TextRegular>
          <PrimaryInput
            placeholder='Enter your email'
            style={styles.input}
            value={email}
            onChangeText={text => handleSetInput('email', text)}
          />
          <TextRegular>Password</TextRegular>
          <PasswordInput
            placeholder='At least 8 characters'
            style={styles.input}
            maxLength={10}
            value={pass1}
            onChangeText={text => handleSetInput('pass1', text)}
          />
          <TextRegular>Repeat Password</TextRegular>
          <PasswordInput
            placeholder='Repeat password'
            style={styles.input}
            maxLength={10}
            error={errorPass2}
            errorMessage='Passwords don’t match'
            value={pass2}
            onChangeText={text => handleSetInput('pass2', text)}
            onBlur={handleOnBlur}
          />
          <PrimaryButton
            title='Sign Up'
            style={styles.button}
            disabled={disabled}
            onPress={handleSignUp}
          />
          <TextLight style={styles.text}>
            By signing up you agree with&nbsp;
            <TextLight style={[styles.link, styles.text]}>Privacy Policy</TextLight>
            <TextLight style={styles.text}>&nbsp;and&nbsp;</TextLight>
            <TextLight style={[styles.link, styles.text]}>Terms and Conditions</TextLight>
          </TextLight>
          <View style={styles.linkSignIn}>
            <TextRegular style={styles.question}>Already have an account?</TextRegular>
            <Pressable onPress={handleLogIn}>
              <TextSemiBold style={styles.logIn}>Log In</TextSemiBold>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light,
    flex: 1,
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
  link: {
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: normalizeFontSize(12),
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
});

export default SignUpScreen;
