import React, { useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react';
import TextRegular from '../../components/UI/TextRegular';
import TextSemiBold from '../../components/UI/TextSemiBold';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import normalizeFontSize from '../../utils/normalizeFontSize';
import PrimaryButton from '../../components/UI/PrimaryButton';
import DropdownBlock from '../../components/Dropdown/DropdownBlock';
import { damageTypes } from '../../constants/mockupData';
import PrimaryInput from '../../components/UI/PrimaryInput';
import WithBorderButton from '../../components/UI/WithBorderButton';
import FileItem from './components/FileItem';
import PoliceReport from './components/PoliceReport';

/**
 * Damage information screen
 * @param navigation
 * @param route
 * @returns {JSX.Element}
 */
const DamageInfoScreen = ({ navigation, route }) => {
  const [state, setState] = useState({
    damage: '',
    damageInfo: '',
    policeReport: 'yes',
  });
  const [photos, setPhotos] = useState([]);
  const [file, setFiles] = useState([]);

  const disabled = useMemo(() => {
    return !Object.values(state).every(item => item !== '');
  }, [state]);

  const handleSeState = (key, value) => {
    setState(prevState => ({ ...prevState, [key]: value }));
  };

  const addPhoto = () => {
    setPhotos(prevState => [...prevState, 'image name.jpg']);
  };

  const removePhoto = () => {
    setPhotos(prevState => prevState.slice(0, prevState.length - 1));
  };

  const onNext = () => {
    const claim = { ...route.params.claim, ...state, damagePhotos: photos, reportFiles: [] };

    if (state.policeReport === 'yes') {
      claim.reportFiles = file;
    }
    navigation.navigate('InsuredInfoScreen', {
      claim,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextSemiBold style={styles.title}>Damage Information</TextSemiBold>
        <TextRegular style={styles.subTitle}>Select the type of damage</TextRegular>
        <DropdownBlock
          label=''
          data={damageTypes}
          onSelect={value => handleSeState('damage', value)}
          style={{ marginBottom: SIZE.minIndent }}
        />
        <TextRegular>Please describe the vehicle damage</TextRegular>
        <PrimaryInput
          multiline={true}
          style={styles.input}
          inputStyles={styles.inputStyles}
          onChangeText={value => handleSeState('damageInfo', value)}
          value={state.damageInfo}
          placeholder='Information about the vehicle damage'
        />
        <View style={styles.line} />
        <TextRegular style={styles.subTitle}>Attach a photo of damage</TextRegular>
        <View style={styles.buttonsBlock}>
          <PrimaryButton title='Take a Photo' style={styles.button} onPress={addPhoto} />
          <WithBorderButton title='Upload a Photo' style={styles.button} onPress={addPhoto} />
        </View>
        {photos.map((item, i) => (
          <FileItem key={i} onPress={removePhoto} name={item} />
        ))}
        <View style={styles.line} />
        <PoliceReport
          setRadioButtons={value => handleSeState('policeReport', value)}
          file={file}
          setFiles={setFiles}
        />
        <View style={styles.line} />
        <TextRegular style={styles.topIndent}>
          Please verify the claim information above before proceeding.
        </TextRegular>
        <PrimaryButton
          disabled={disabled}
          title='Next'
          onPress={onNext}
          style={styles.nextButton}
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
  subTitle: {
    marginTop: SIZE.mediumIndent,
    color: COLORS.fontLight,
    fontSize: normalizeFontSize(16),
  },
  input: {
    marginTop: SIZE.minIndent,
  },
  inputStyles: {
    height: 100,
    borderRadius: 12,
    alignItems: 'flex-start',
    paddingTop: SIZE.minIndent / 2,
  },
  line: {
    height: 1,
    backgroundColor: COLORS.border,
    marginTop: SIZE.mediumIndent,
  },
  buttonsBlock: {
    flexDirection: 'row',
    marginTop: SIZE.mediumIndent,
    justifyContent: 'space-between',
  },
  button: {
    flexBasis: '48%',
  },
  topIndent: {
    marginTop: SIZE.mediumIndent,
  },
  nextButton: {
    marginVertical: SIZE.mediumIndent,
  },
});

export default observer(DamageInfoScreen);
