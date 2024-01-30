import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import TextSemiBold from '../../components/UI/TextSemiBold';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import normalizeFontSize from '../../utils/normalizeFontSize';
import TextRegular from '../../components/UI/TextRegular';
import PrimaryButton from '../../components/UI/PrimaryButton';
import { BigSuccess } from '../../assets/icons';

/**
 * Policy created message screen
 * @param {object} navigation
 * @returns {JSX.Element}
 */
const PolicyCreatedScreen = ({ navigation }) => {
  const onMainScreen = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'DashboardStack', screen: 'HomeScreen' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BigSuccess />
        <TextSemiBold style={styles.title}>Congratulations!</TextSemiBold>
      </View>
      <TextSemiBold style={styles.subTitle}>Your policy was successfully created.</TextSemiBold>
      <TextRegular style={styles.label}>
        Your policy was successfully created. Please view the list of your policies on the
        dashboard.
      </TextRegular>
      <PrimaryButton title='My Dashboard' style={styles.button} onPress={onMainScreen} />
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
    marginTop: SIZE.minIndent,
    fontSize: normalizeFontSize(16),
  },
  button: {
    marginTop: SIZE.mediumIndent,
  },
  subTitle: {
    fontSize: normalizeFontSize(18),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SIZE.mediumIndent,
  },
});

export default PolicyCreatedScreen;
