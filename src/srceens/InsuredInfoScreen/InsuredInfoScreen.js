import React, { useMemo, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import TextSemiBold from '../../components/UI/TextSemiBold';
import normalizeFontSize from '../../utils/normalizeFontSize';
import TextRegular from '../../components/UI/TextRegular';
import PrimaryInput from '../../components/UI/PrimaryInput';
import PrimaryButton from '../../components/UI/PrimaryButton';
import { useRootModel } from '../../models/RootStore';

/**
 * Insured information screen
 * @param {object} navigation
 * @param route
 * @returns {JSX.Element}
 */
const InsuredInfoScreen = ({ navigation, route }) => {
  const {
    user: { userInfo, addNewClaim },
  } = useRootModel();
  const { damage } = route.params.claim;
  const buttonName = damage === 'Accident/Collision' ? 'Next' : 'Submit a Claim';

  const [state, setState] = useState({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    address: '',
    phone: '',
    email: userInfo.email,
  });

  const disabled = useMemo(() => {
    return !Object.values(state).every(item => item !== '');
  }, [state]);

  const handleSetState = (key, value) => {
    setState(prevState => ({ ...prevState, [key]: value }));
  };

  const onSubmit = () => {
    const claim = { ...route.params.claim, ...state };
    if (damage === 'Accident/Collision') {
      navigation.navigate('AccidentInfoScreen', { claim });
    } else {
      claim.status = 'review';
      addNewClaim(claim);
      navigation.reset({
        index: 0,
        routes: [{ name: 'FinishedClaimScreen' }],
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.wrapper}>
          <TextSemiBold style={styles.title}>The Insured Information</TextSemiBold>
          <TextRegular style={styles.subTitle}>
            Please verify the Insured Information and update if necessary
          </TextRegular>
          <TextRegular>First Name</TextRegular>
          <PrimaryInput
            style={styles.input}
            onChangeText={value => handleSetState('firstName', value)}
            value={state.firstName}
            placeholder='Enter your first name'
          />
          <TextRegular>Last Name</TextRegular>
          <PrimaryInput
            style={styles.input}
            onChangeText={value => handleSetState('lastName', value)}
            value={state.lastName}
            placeholder='Enter your last name'
          />
          <TextRegular>Address</TextRegular>
          <PrimaryInput
            multiline={true}
            style={styles.input}
            inputStyles={styles.inputStyles}
            onChangeText={value => handleSetState('address', value)}
            value={state.address}
            placeholder='Address'
          />
          <TextRegular>Telephone</TextRegular>
          <PrimaryInput
            style={styles.input}
            onChangeText={value => handleSetState('phone', value)}
            value={state.phone}
            placeholder='Enter your phone number'
            keyboardType='numeric'
          />
          <TextRegular>Email</TextRegular>
          <PrimaryInput
            style={styles.input}
            onChangeText={value => handleSetState('email', value)}
            value={state.email}
            placeholder='Enter your email'
            keyboardType='email-address'
          />
          <PrimaryButton
            title={buttonName}
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
  input: {
    marginTop: SIZE.minIndent / 2,
    marginBottom: SIZE.minIndent,
  },
  inputStyles: {
    height: 100,
    borderRadius: 12,
    alignItems: 'flex-start',
    paddingTop: SIZE.minIndent / 2,
  },
  button: {
    marginTop: SIZE.mediumIndent,
  },
});

export default InsuredInfoScreen;
