import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import TextSemiBold from '../../components/UI/TextSemiBold';
import PrimaryButton from '../../components/UI/PrimaryButton';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import normalizeFontSize from '../../utils/normalizeFontSize';
import { BigSuccess } from '../../assets/icons';
import TextRegular from '../../components/UI/TextRegular';

/**
 * Confirmation screen
 * @param {object} navigation
 * @returns {JSX.Element}
 */
const ConfirmationScreen = ({ navigation }) => {
  const login = () => {
    navigation.navigate('LogInScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <BigSuccess />
          <View>
            <TextSemiBold style={styles.title}>New password</TextSemiBold>
            <TextSemiBold style={styles.title}>created</TextSemiBold>
          </View>
        </View>
        <TextRegular style={styles.text}>Please log in with a new password</TextRegular>
        <PrimaryButton title='Log In' style={styles.button} disabled={false} onPress={login} />
      </View>
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
  button: {
    marginTop: SIZE.mediumIndent,
    marginBottom: SIZE.minIndent,
  },
  text: {
    fontSize: normalizeFontSize(18),
    marginTop: SIZE.minIndent,
    color: COLORS.fontLight,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ConfirmationScreen;
