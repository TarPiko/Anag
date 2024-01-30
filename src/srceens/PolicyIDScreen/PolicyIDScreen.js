import React, { useState } from 'react';
import { Keyboard, SafeAreaView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import TextLight from '../../components/UI/TextLight';
import TextSemiBold from '../../components/UI/TextSemiBold';
import normalizeFontSize from '../../utils/normalizeFontSize';
import TextRegular from '../../components/UI/TextRegular';
import PrimaryInput from '../../components/UI/PrimaryInput';
import PrimaryButton from '../../components/UI/PrimaryButton';
import { useRootModel } from '../../models/RootStore';
import { defaultPolicy } from '../../constants/mockupData';

/**
 * PolicyID screen
 * @param {object} navigation
 * @returns {JSX.Element}
 */
const PolicyIDScreen = ({ navigation }) => {
  const {
    user: { addNewQuote, setOnBoarding },
  } = useRootModel();

  const [policyNumber, setPolicy] = useState('');

  const onSubmit = () => {
    addNewQuote({ ...defaultPolicy, policyNumber, createdDate: new Date().getTime() });
    setOnBoarding(true);
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainStack' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <TextSemiBold style={styles.title}>Let’s set up your policy!</TextSemiBold>
          <TextRegular style={styles.description}>Please fill in the policy number</TextRegular>
          <PrimaryInput
            style={styles.input}
            onChangeText={setPolicy}
            value={policyNumber}
            keyboardType='numeric'
            maxLength={12}
            placeholder='0000000000'
          />
          <TextLight style={styles.link}>Where do I find my policy number?</TextLight>
          <PrimaryButton
            style={styles.button}
            title='Submit'
            onPress={onSubmit}
            disabled={!policyNumber}
          />
        </View>
      </TouchableWithoutFeedback>
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
  },
  description: {
    marginTop: SIZE.mediumIndent,
  },
  link: {
    textDecorationLine: 'underline',
    marginTop: SIZE.minIndent,
  },
  input: {
    marginTop: SIZE.minIndent,
  },
  button: {
    marginTop: SIZE.mediumIndent,
  },
});

export default PolicyIDScreen;
