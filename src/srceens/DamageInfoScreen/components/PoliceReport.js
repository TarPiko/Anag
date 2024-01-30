import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TextRegular from '../../../components/UI/TextRegular';
import { COLORS, SIZE } from '../../../constants/defaultStyles';
import normalizeFontSize from '../../../utils/normalizeFontSize';
import RadioGroup from 'react-native-radio-buttons-group';
import WithBorderButton from '../../../components/UI/WithBorderButton';
import FileItem from './FileItem';

const radioButtonsData = [
  {
    id: '1',
    label: <TextRegular>Yes</TextRegular>,
    value: 'yes',
    borderColor: COLORS.green,
    color: COLORS.green,
    containerStyle: {
      flex: 1,
    },
    selected: true,
  },
  {
    id: '2',
    label: <TextRegular>No</TextRegular>,
    value: 'no',
    borderColor: COLORS.green,
    color: COLORS.green,
    containerStyle: {
      flex: 1,
    },
    selected: false,
  },
];

const PoliceReport = ({ setRadioButtons, file, setFiles }) => {
  const [showButton, setShowButton] = useState(true);

  const addFile = () => {
    setFiles(prevState => [...prevState, 'report name.pdf']);
  };

  const removeFile = () => {
    setFiles(prevState => prevState.slice(0, prevState.length - 1));
  };

  const onPressRadioButton = radioButtonsArray => {
    const value = radioButtonsArray.find(item => item.selected === true).value;
    setRadioButtons(value);

    if (value === 'no') {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  };

  return (
    <View style={styles.container}>
      <TextRegular style={styles.subTitle}>Is there a Police Report?</TextRegular>
      <RadioGroup
        radioButtons={radioButtonsData}
        onPress={onPressRadioButton}
        color={COLORS.green}
        layout='row'
        containerStyle={styles.containerStyle}
      />
      {showButton && (
        <>
          <WithBorderButton title='Upload a report' onPress={addFile} style={styles.button} />
          {file.map((item, i) => (
            <FileItem key={i} onPress={removeFile} name={item} />
          ))}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZE.mediumIndent,
  },
  subTitle: {
    color: COLORS.fontLight,
    fontSize: normalizeFontSize(16),
  },
  containerStyle: {
    marginTop: SIZE.minIndent,
  },
  button: {
    marginTop: SIZE.minIndent,
  },
});

export default PoliceReport;
