import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import TextSemiBold from '../../components/UI/TextSemiBold';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import normalizeFontSize from '../../utils/normalizeFontSize';
import TextRegular from '../../components/UI/TextRegular';
import PrimaryButton from '../../components/UI/PrimaryButton';
import { BigSuccess } from '../../assets/icons';

/**
 * Finish create new claim screen
 * @param {object} navigation
 * @returns {JSX.Element}
 */
const FinishedClaimScreen = ({ navigation }) => {
  const onMainScreen = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'ClaimsScreen' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BigSuccess />
        <TextSemiBold style={styles.title}>Thank you!</TextSemiBold>
      </View>
      <TextRegular style={styles.label}>Our agent will be in contact with you shortly.</TextRegular>
      <PrimaryButton title='View my Claims' style={styles.button} onPress={onMainScreen} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
    paddingHorizontal: SIZE.mediumIndent,
  },
  title: {
    fontSize: normalizeFontSize(25),
    marginLeft: SIZE.minIndent,
  },
  label: {
    color: COLORS.fontLight,
    fontSize: normalizeFontSize(16),
  },
  button: {
    marginTop: SIZE.mediumIndent,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SIZE.mediumIndent,
  },
});

export default FinishedClaimScreen;
