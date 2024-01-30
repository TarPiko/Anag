import React, { useMemo, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import TextSemiBold from '../../components/UI/TextSemiBold';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import normalizeFontSize from '../../utils/normalizeFontSize';
import TextRegular from '../../components/UI/TextRegular';
import PrimaryInput from '../../components/UI/PrimaryInput';
import PrimaryButton from '../../components/UI/PrimaryButton';

const radioButtonsData = [
  {
    id: '1',
    label: <TextRegular>Female</TextRegular>,
    value: 'female',
    borderColor: COLORS.green,
    color: COLORS.green,
    containerStyle: {
      flex: 1,
    },
    selected: true,
  },
  {
    id: '2',
    label: <TextRegular>Male</TextRegular>,
    value: 'male',
    borderColor: COLORS.green,
    color: COLORS.green,
    containerStyle: {
      flex: 1,
    },
    selected: false,
  },
];

/**
 * Driver information screen
 * @param {object} navigation
 * @param {object} route
 * @returns {JSX.Element}
 */
const DriverInfoScreen = ({ navigation, route }) => {
  const [driverYear, setDriverYear] = useState('');
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  const onPressRadioButton = radioButtonsArray => {
    setRadioButtons(radioButtonsArray);
  };

  const disabled = useMemo(() => {
    const now = new Date().getFullYear();
    const old = now - +driverYear;

    return driverYear.length === 4 && old >= 16;
  }, [driverYear]);

  const onNext = () => {
    const gender = radioButtons.find(item => item.selected === true).value;
    navigation.navigate('VehicleInfoScreen', {
      quote: { ...route.params.quote, driverYear, gender },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextSemiBold style={styles.title}>Driver Information</TextSemiBold>
      <TextRegular style={styles.label}>Year of Birth</TextRegular>
      <PrimaryInput
        style={styles.input}
        onChangeText={setDriverYear}
        value={driverYear}
        keyboardType='numeric'
        maxLength={4}
        placeholder='YYYY'
      />
      <TextRegular style={styles.label}>Gender</TextRegular>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        color={COLORS.green}
        layout='row'
      />

      <PrimaryButton title='Next' style={styles.button} disabled={!disabled} onPress={onNext} />
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
    marginTop: SIZE.mediumIndent,
  },
  input: {
    marginTop: SIZE.minIndent,
    width: '30%',
  },
  label: {
    marginTop: SIZE.mediumIndent,
  },
  button: {
    marginTop: SIZE.mediumIndent,
  },
});

export default DriverInfoScreen;
