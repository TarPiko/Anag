import React, { useEffect, useState } from 'react';
import { COLORS, SIZE } from '../../../constants/defaultStyles';
import { StyleSheet, View } from 'react-native';
import TextRegular from '../../../components/UI/TextRegular';
import RadioGroup from 'react-native-radio-buttons-group';

const radioButtonsData = [
  {
    id: '1',
    label: <TextRegular>Personal</TextRegular>,
    value: 'personal',
    borderColor: COLORS.green,
    color: COLORS.green,
    containerStyle: {
      flex: 1,
    },
    selected: true,
  },
  {
    id: '2',
    label: <TextRegular>Commercial</TextRegular>,
    value: 'commercial',
    borderColor: COLORS.green,
    color: COLORS.green,
    containerStyle: {
      flex: 1,
    },
    selected: false,
  },
];

const PurposeVehicle = ({ setPurposeVehicle }) => {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  useEffect(() => {
    const checked = radioButtonsData.find(item => item.selected === true);
    setPurposeVehicle(checked.value);
  }, []);

  const onPressRadioButton = radioButtonsArray => {
    const checked = radioButtonsArray.find(item => item.selected === true);
    setRadioButtons(radioButtonsArray);
    setPurposeVehicle(checked.value);
  };
  return (
    <View style={styles.container}>
      <TextRegular>Select the purpose of this vehicle.</TextRegular>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        color={COLORS.green}
        containerStyle={styles.containerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZE.mediumIndent,
  },
  containerStyle: {
    alignItems: 'flex-start',
  },
});

export default PurposeVehicle;
