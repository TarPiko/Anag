import React, { useEffect, useState } from 'react';
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
    label: <TextRegular>Insured</TextRegular>,
    value: 'insured',
    borderColor: COLORS.green,
    color: COLORS.green,
    containerStyle: {
      flex: 1,
    },
    selected: true,
  },
  {
    id: '2',
    label: <TextRegular>Other</TextRegular>,
    value: 'other',
    borderColor: COLORS.green,
    color: COLORS.green,
    containerStyle: {
      flex: 1,
    },
    selected: false,
  },
];

const DriverAccident = ({ setRadioButtons, file, setFiles }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const value = radioButtonsData.find(item => item.selected === true).value;

    if (value === 'insured') {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, []);

  const addFile = () => {
    setFiles(prevState => [...prevState, 'Driver’s License.pdf']);
  };

  const removeFile = () => {
    setFiles(prevState => prevState.slice(0, prevState.length - 1));
  };

  const onPressRadioButton = radioButtonsArray => {
    const value = radioButtonsArray.find(item => item.selected === true).value;
    setRadioButtons(value);

    if (value === 'insured') {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  };

  return (
    <View style={styles.container}>
      <TextRegular style={styles.subTitle}>
        Who was the driver at the moment of accident?
      </TextRegular>
      <RadioGroup
        radioButtons={radioButtonsData}
        onPress={onPressRadioButton}
        color={COLORS.green}
        layout='row'
        containerStyle={styles.containerStyle}
      />
      {showButton && (
        <>
          <WithBorderButton
            title='Upload Driver’s License'
            onPress={addFile}
            style={styles.button}
          />
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

export default DriverAccident;
