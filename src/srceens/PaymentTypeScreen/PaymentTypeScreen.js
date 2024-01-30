import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import TextSemiBold from '../../components/UI/TextSemiBold';
import { BigSuccess } from '../../assets/icons';
import TextRegular from '../../components/UI/TextRegular';
import PrimaryButton from '../../components/UI/PrimaryButton';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import normalizeFontSize from '../../utils/normalizeFontSize';
import PaymentItem from './components/PaymentItem';

const radioButtonsList = [
  {
    id: 0,
    label: <PaymentItem title='Bank Account' label='Prepare routing and account number' />,
    value: 'Bank Account',
    borderColor: COLORS.green,
    color: COLORS.green,
    containerStyle: {
      height: 40,
      alignSelf: 'flex-start',
      alignItems: 'center',
    },
    selected: true,
  },
  {
    id: 1,
    label: <PaymentItem title='Check' label='to be uplifted at main office' />,
    value: 'Check',
    borderColor: COLORS.green,
    color: COLORS.green,
    containerStyle: {
      height: 40,
      alignSelf: 'flex-start',
      alignItems: 'center',
    },
    selected: false,
  },
];

/**
 * Payment type screen
 * @returns {JSX.Element}
 */
const PaymentTypeScreen = ({ navigation, route }) => {
  const { claim } = route.params;
  const [radioButtons, setRadioButtons] = useState(radioButtonsList);

  const onPressRadioButton = radioButtonsArray => {
    setRadioButtons(radioButtonsArray);
  };

  const onMainScreen = () => {
    claim.setStatus('paid');
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
      <TextSemiBold style={styles.label}>Your Claim Payment is ready.</TextSemiBold>
      <TextRegular style={styles.subTitle}>How would you like to receive payment?</TextRegular>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        color={COLORS.green}
        textColor
        layout='column'
        containerStyle={styles.containerStyle}
      />
      <PrimaryButton title='Submit' style={styles.button} onPress={onMainScreen} />
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
    marginLeft: SIZE.mediumIndent,
  },
  label: {
    fontSize: normalizeFontSize(18),
  },
  button: {
    marginTop: SIZE.mediumIndent,
  },
  subTitle: {
    fontSize: normalizeFontSize(16),
    marginTop: SIZE.minIndent,
  },
  containerStyle: {
    marginTop: SIZE.minIndent,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SIZE.mediumIndent,
  },
});

export default PaymentTypeScreen;
