import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { LogoIcon } from '../../assets/icons';
import TextSemiBold from '../../components/UI/TextSemiBold';
import WithBorderButton from '../../components/UI/WithBorderButton';
import PrimaryButton from '../../components/UI/PrimaryButton';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import normalizeFontSize from '../../utils/normalizeFontSize';

/**
 * Welcome screen
 * @param navigation
 * @returns {JSX.Element}
 */
const WelcomeScreen = ({ navigation }) => {
  const onLogin = () => {
    navigation.navigate('LogInScreen');
  };

  const onSignUp = () => {
    navigation.navigate('SignUpScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <LogoIcon size={58} />
        <TextSemiBold style={styles.title}>Please log in to your account.</TextSemiBold>
        <PrimaryButton title='Log In' style={styles.button} onPress={onLogin} />
        <WithBorderButton title='Sign Up' style={styles.button} onPress={onSignUp} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: SIZE.mediumIndent,
    justifyContent: 'center',
  },
  title: {
    fontSize: normalizeFontSize(25),
    marginTop: SIZE.minIndent,
  },
  description: {
    marginTop: SIZE.mediumIndent,
  },
  buttonsBlock: {
    flexDirection: 'row',
    marginTop: SIZE.mediumIndent,
    justifyContent: 'space-between',
  },
  button: {
    // flexBasis: '46%',
    marginTop: SIZE.mediumIndent,
  },
  link: {
    textDecorationLine: 'underline',
  },
  indent: {
    marginLeft: SIZE.minIndent,
  },
});

export default WelcomeScreen;
