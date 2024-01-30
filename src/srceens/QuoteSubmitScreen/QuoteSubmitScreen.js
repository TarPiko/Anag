import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import TextSemiBold from '../../components/UI/TextSemiBold';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import normalizeFontSize from '../../utils/normalizeFontSize';
import TextRegular from '../../components/UI/TextRegular';
import PrimaryButton from '../../components/UI/PrimaryButton';
import { useRootModel } from '../../models/RootStore';

const radioButtonsData = [
  {
    id: '1',
    label: <TextRegular>Third-Party</TextRegular>,
    value: 'Third-party',
    borderColor: COLORS.green,
    color: COLORS.green,
    containerStyle: {
      flex: 1,
    },
    selected: true,
  },
  {
    id: '2',
    label: <TextRegular>Comprehensive</TextRegular>,
    value: 'Comprehensive',
    borderColor: COLORS.green,
    color: COLORS.green,
    containerStyle: {
      flex: 1,
    },
    selected: false,
  },
];

/**
 * Quote submit screen
 * @param {object} navigation
 * @param {object} route
 * @returns {JSX.Element}
 */
const QuoteSubmitScreen = ({ navigation, route }) => {
  const {
    user: { addNewQuote },
  } = useRootModel();
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  const onPressRadioButton = radioButtonsArray => {
    setRadioButtons(radioButtonsArray);
  };

  const onCreate = () => {
    const policyOption = radioButtons.find(item => item.selected === true).value;
    const price = policyOption === 'Comprehensive' ? '$900' : '$768';
    const quote = {
      ...route.params.quote,
      policyOption,
      price,
      isFinished: false,
      isPolicy: false,
      policyNumber: (Math.random() * 10000000).toFixed(),
      createdDate: new Date().getTime(),
    };
    addNewQuote(quote);

    navigation.reset({
      index: 0,
      routes: [{ name: 'FinishedQuoteScreen' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextSemiBold style={styles.title}>Congratulations!</TextSemiBold>
      <TextRegular style={styles.label}>Please find your Premium estimates below.</TextRegular>
      <View style={styles.priceBlock}>
        <View style={styles.flex1}>
          <TextSemiBold style={styles.titlePrice}>Third-Party</TextSemiBold>
          <TextSemiBold style={styles.price}>$768</TextSemiBold>
        </View>
        <View style={styles.flex1}>
          <TextSemiBold style={styles.titlePrice}>Comprehensive</TextSemiBold>
          <TextSemiBold style={styles.price}>$900</TextSemiBold>
        </View>
      </View>
      <View style={styles.line} />
      <TextSemiBold style={styles.question}>
        Would you like to proceed with the policy creation?
      </TextSemiBold>
      <TextRegular style={styles.label}>Please choose the policy option</TextRegular>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        color={COLORS.green}
        layout='row'
        containerStyle={styles.containerStyle}
      />

      <PrimaryButton title='Create quote' style={styles.marginTop} onPress={onCreate} />
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
  marginTop: {
    marginTop: SIZE.mediumIndent,
  },
  question: {
    fontSize: normalizeFontSize(16),
  },
  priceBlock: {
    flexDirection: 'row',
    marginTop: SIZE.minIndent,
  },
  titlePrice: {
    fontSize: normalizeFontSize(16),
  },
  price: {
    color: COLORS.orange,
    fontSize: normalizeFontSize(25),
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: COLORS.border,
    marginVertical: SIZE.mediumIndent,
  },
  label: {
    color: COLORS.fontLight,
    marginTop: SIZE.minIndent,
    fontSize: normalizeFontSize(16),
  },
  containerStyle: {
    marginTop: SIZE.minIndent,
  },
  flex1: {
    flex: 1,
  },
});

export default QuoteSubmitScreen;
