import React, { useMemo, useRef, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import TextSemiBold from '../../components/UI/TextSemiBold';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import normalizeFontSize from '../../utils/normalizeFontSize';
import TextRegular from '../../components/UI/TextRegular';
import PrimaryInput from '../../components/UI/PrimaryInput';
import PrimaryButton from '../../components/UI/PrimaryButton';
import DropdownBlock from '../../components/Dropdown/DropdownBlock';
import TextLight from '../../components/UI/TextLight';
import PurposeVehicle from './components/PurposeVehicle';
import { annualMileage, makeModel, trim } from '../../constants/mockupData';

/**
 * Vehicle information screen
 * @param {object} navigation
 * @param {object} route
 * @returns {JSX.Element}
 */
const VehicleInfoScreen = ({ navigation, route }) => {
  const [state, setState] = useState({
    vin: '',
    vehicleYear: '',
    make: '',
    model: '',
    trim: '',
    // vehicleType: '',
    annualMileage: '',
    purposeVehicle: '',
  });

  const dropdownRef = useRef(null);

  const handleSetState = (key, value) => {
    setState(prevState => {
      if (key === 'make') {
        dropdownRef.current.reset();
        return { ...prevState, [key]: value, model: '' };
      } else if (key === 'vehicleYear' && value.length === 4) {
        const now = new Date().getFullYear();
        if (now >= +value - 1) {
          return { ...prevState, [key]: value };
        } else {
          return { ...prevState, [key]: prevState[key] };
        }
      }
      return { ...prevState, [key]: value };
    });
  };

  const disabled = useMemo(() => {
    const { vehicleYear } = state;
    let value = true;
    const exist = Object.values(state).every(item => item !== '');

    if (vehicleYear.length !== 4) {
      return true;
    }
    if (exist) {
      value = false;
    }
    return value;
  }, [state]);

  const onSubmit = () => {
    navigation.navigate('QuoteSubmitScreen', { quote: { ...route.params.quote, ...state } });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextSemiBold style={styles.title}>Vehicle Information</TextSemiBold>
        <View style={[styles.row, styles.marginTop]}>
          <View style={styles.shortInput}>
            <TextRegular>Year</TextRegular>
            <PrimaryInput
              style={styles.input}
              onChangeText={text => handleSetState('vehicleYear', text)}
              value={state.vehicleYear}
              keyboardType='numeric'
              maxLength={4}
              placeholder='YYYY'
            />
          </View>
          <DropdownBlock
            label='Make'
            data={Object.keys(makeModel)}
            style={styles.dropdown}
            onSelect={text => handleSetState('make', text)}
          />
        </View>
        <View style={[styles.row, styles.marginTop]}>
          <DropdownBlock
            dropdownRef={dropdownRef}
            label='Model'
            data={makeModel[state.make]}
            onSelect={text => handleSetState('model', text)}
          />
          <DropdownBlock
            label='Trim'
            data={trim}
            style={styles.dropdown}
            onSelect={text => handleSetState('trim', text)}
          />
        </View>
        {/*<DropdownBlock*/}
        {/*  label='Vehicle Type'*/}
        {/*  data={vehicleType}*/}
        {/*  onSelect={text => handleSetState('vehicleType', text)}*/}
        {/*  style={styles.marginTop}*/}
        {/*/>*/}
        <DropdownBlock
          label='Annual Mileage'
          data={annualMileage}
          onSelect={text => handleSetState('annualMileage', text)}
          style={styles.marginTop}
        />
        <View style={styles.marginTop}>
          <TextRegular>Vehicle Identification Number (VIN)</TextRegular>
          <PrimaryInput
            style={styles.input}
            onChangeText={text => handleSetState('vin', text)}
            value={state.vin}
            maxLength={20}
            placeholder='XXXXXXXXXXXXXXXXX'
          />
        </View>
        <TextLight style={styles.textVin}>Where do I find my VIN number?</TextLight>
        <PurposeVehicle setPurposeVehicle={text => handleSetState('purposeVehicle', text)} />
        <PrimaryButton
          title='Submit'
          style={styles.button}
          onPress={onSubmit}
          disabled={disabled}
        />
      </ScrollView>
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
  },
  marginTop: {
    marginTop: SIZE.mediumIndent,
  },
  button: {
    marginVertical: SIZE.mediumIndent,
  },
  row: {
    flexDirection: 'row',
  },
  dropdown: {
    marginLeft: SIZE.minIndent,
  },
  shortInput: {
    width: '30%',
  },
  textVin: {
    fontSize: normalizeFontSize(12),
    textDecorationLine: 'underline',
    marginTop: SIZE.minIndent / 2,
  },
});

export default VehicleInfoScreen;
