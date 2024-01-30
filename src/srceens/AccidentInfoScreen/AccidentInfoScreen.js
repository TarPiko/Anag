import React, { useMemo, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TextSemiBold from '../../components/UI/TextSemiBold';
import TextRegular from '../../components/UI/TextRegular';
import normalizeFontSize from '../../utils/normalizeFontSize';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import DriverAccident from './components/DriverAccident';
import PrimaryInput from '../../components/UI/PrimaryInput';
import PrimaryButton from '../../components/UI/PrimaryButton';
import { useRootModel } from '../../models/RootStore';

/**
 * Accident information screen
 * @param navigation
 * @param route
 * @returns {JSX.Element}
 */
const AccidentInfoScreen = ({ navigation, route }) => {
  const {
    user: { addNewClaim },
  } = useRootModel();

  const [file, setFiles] = useState([]);
  const [state, setState] = useState({
    driverAccident: 'insured',
    street: '',
    district: '',
    vehicleSpeed: '',
    roadConditions: '',
  });

  const disabled = useMemo(() => {
    return !Object.values(state).every(item => item !== '');
  }, [state]);

  const handleSetState = (key, value) => {
    setState(prevState => ({ ...prevState, [key]: value }));
  };

  const onSubmit = () => {
    const claim = {
      ...route.params.claim,
      ...state,
      driverLicense: [],
      status: 'review',
    };
    if (state.driverAccident === 'other') {
      claim.driverLicense = file;
    }

    addNewClaim(claim);
    navigation.reset({
      index: 0,
      routes: [{ name: 'FinishedClaimScreen' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.wrapper}>
          <TextSemiBold style={styles.title}>Accident Information</TextSemiBold>
          <DriverAccident
            setRadioButtons={value => handleSetState('driverAccident', value)}
            file={file}
            setFiles={setFiles}
          />
          <View style={styles.line} />
          <TextRegular style={styles.subTitle}>Where did the accident occur?</TextRegular>
          <TextRegular>Street</TextRegular>
          <PrimaryInput
            style={styles.input}
            onChangeText={value => handleSetState('street', value)}
            value={state.firstName}
            placeholder='Enter your street'
          />
          <TextRegular>District</TextRegular>
          <PrimaryInput
            style={styles.input}
            onChangeText={value => handleSetState('district', value)}
            value={state.lastName}
            placeholder='Enter your district'
          />
          <View style={styles.line} />
          <TextRegular style={styles.subTitle}>Accident details</TextRegular>
          <TextRegular>Vehicle speed before the accident? </TextRegular>
          <PrimaryInput
            style={styles.input}
            onChangeText={value => handleSetState('vehicleSpeed', value)}
            value={state.firstName}
            placeholder='ex. 65–70 mph'
          />
          <TextRegular>What were the road conditions?</TextRegular>
          <PrimaryInput
            style={styles.input}
            onChangeText={value => handleSetState('roadConditions', value)}
            value={state.lastName}
            placeholder='Wet, dry, etc'
          />
          <PrimaryButton
            title='Submit a claim'
            style={styles.button}
            onPress={onSubmit}
            disabled={disabled}
          />
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
  },
  subTitle: {
    marginVertical: SIZE.mediumIndent,
    color: COLORS.fontLight,
    fontSize: normalizeFontSize(16),
  },
  line: {
    height: 1,
    backgroundColor: COLORS.border,
    marginTop: SIZE.mediumIndent,
  },
  input: {
    marginTop: SIZE.minIndent / 2,
    marginBottom: SIZE.minIndent,
  },
  button: {
    marginTop: SIZE.mediumIndent,
  },
});

export default AccidentInfoScreen;
