import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react';
import RadioGroup from 'react-native-radio-buttons-group';
import TextRegular from '../../components/UI/TextRegular';
import TextSemiBold from '../../components/UI/TextSemiBold';
import AddButton from '../../components/UI/AddButton';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import normalizeFontSize from '../../utils/normalizeFontSize';
import { useRootModel } from '../../models/RootStore';
import AddPolicyModal from '../../components/modals/AddPolicyModal';
import PolicyItem from './components/PolicyItem';
import PrimaryButton from '../../components/UI/PrimaryButton';

/**
 * Make claims screen
 * @param navigation
 * @returns {JSX.Element}
 */
const MakeClaimScreen = ({ navigation }) => {
  const {
    user: { quotes },
  } = useRootModel();
  const [isVisible, setIsVisible] = useState(false);
  const [radioButtons, setRadioButtons] = useState([]);

  useEffect(() => {
    const policyButtons = policyList.map((item, i) => {
      const title = `${item.vehicleYear} ${item.make} ${item.model}`;
      return {
        id: i,
        label: <PolicyItem policy={item.policyNumber} title={title} />,
        value: item.policyNumber,
        borderColor: COLORS.green,
        color: COLORS.green,
        containerStyle: {
          height: 40,
          alignSelf: 'flex-start',
          alignItems: 'center',
        },
        selected: i === 0,
      };
    });

    setRadioButtons(policyButtons);
  }, []);

  const onPressRadioButton = radioButtonsArray => {
    setRadioButtons(radioButtonsArray);
  };

  const policyList = quotes.filter(item => item.isPolicy === true);

  const addPolicy = () => {
    setIsVisible(true);
  };

  const onNext = () => {
    const vehiclePolicy = radioButtons.find(item => item.selected === true).value;
    navigation.navigate('DamageInfoScreen', { claim: { vehiclePolicy } });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextSemiBold style={styles.title}>Make a Claim</TextSemiBold>
        <View style={styles.subTitle}>
          {policyList.length ? (
            <>
              <TextRegular style={styles.subTitle}>
                Please select the vehicle that you wish to report a claim for.
              </TextRegular>
              <RadioGroup
                radioButtons={radioButtons}
                onPress={onPressRadioButton}
                color={COLORS.green}
                layout='column'
                containerStyle={styles.containerStyle}
              />
              <PrimaryButton title='Next' style={styles.button} onPress={onNext} />
            </>
          ) : (
            <>
              <TextRegular style={styles.subTitle}>
                Claims are available only for existing polices.
              </TextRegular>
              <AddButton title='Add policy' onPress={addPolicy} style={styles.button} />
            </>
          )}
        </View>
        <AddPolicyModal setIsVisible={setIsVisible} isVisible={isVisible} />
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
  subTitle: {
    marginTop: SIZE.minIndent,
    color: COLORS.fontLight,
  },
  button: {
    marginTop: SIZE.mediumIndent,
  },
  containerStyle: {
    marginTop: SIZE.minIndent,
  },
});

export default observer(MakeClaimScreen);
