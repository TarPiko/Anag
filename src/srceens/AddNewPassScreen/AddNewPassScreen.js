import React, { useMemo, useState } from 'react';
import { Keyboard, SafeAreaView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import normalizeFontSize from '../../utils/normalizeFontSize';
import TextSemiBold from '../../components/UI/TextSemiBold';
import TextRegular from '../../components/UI/TextRegular';
import PrimaryButton from '../../components/UI/PrimaryButton';
import PasswordInput from '../../components/UI/PasswordInput';
import { useRootModel } from '../../models/RootStore';

/**
 * Add new password screen
 * @param navigation
 * @returns {JSX.Element}
 */
const AddNewPassScreen = ({ navigation }) => {
  const {
    user: { userInfo },
  } = useRootModel();
  const [input, setInput] = useState({
    pass1: '',
    pass2: '',
  });
  const [errorPass2, setError] = useState(false);

  const { pass1, pass2 } = input;

  const handleOnBlur = () => {
    if (pass1 !== pass2) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const disabled = useMemo(() => {
    let value = true;
    if (pass1 !== '' && pass2 !== '') {
      value = false;
    }
    if (pass1 !== pass2) {
      value = true;
    }
    return value;
  }, [pass1, pass2]);

  const handleSetInput = (key, value) => {
    setInput({ ...input, [key]: value });
  };

  const resetPassword = () => {
    userInfo.setUserPass(pass1);
    navigation.navigate('ConfirmationScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <TextSemiBold style={styles.title}>Create new password</TextSemiBold>
          <TextRegular>New Password</TextRegular>
          <PasswordInput
            placeholder='At least 8 characters'
            style={styles.input}
            maxLength={10}
            value={pass1}
            onChangeText={text => handleSetInput('pass1', text)}
          />
          <TextRegular>Repeat Password</TextRegular>
          <PasswordInput
            placeholder='Repeat password'
            style={styles.input}
            maxLength={10}
            error={errorPass2}
            errorMessage='Passwords don’t match'
            value={pass2}
            onChangeText={text => handleSetInput('pass2', text)}
            onBlur={handleOnBlur}
          />
          <PrimaryButton
            title='Reset password'
            style={styles.button}
            disabled={disabled}
            onPress={resetPassword}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light,
    flex: 1,
    justifyContent: 'space-between',
  },
  wrapper: {
    flex: 1,
    padding: SIZE.mediumIndent,
  },
  title: {
    fontSize: normalizeFontSize(25),
    marginBottom: SIZE.minIndent,
  },
  desc: {
    fontSize: normalizeFontSize(16),
    color: COLORS.fontLight,
    marginBottom: SIZE.minIndent,
  },
  input: {
    marginTop: SIZE.minIndent / 2,
    marginBottom: SIZE.minIndent,
  },
  button: {
    marginTop: SIZE.mediumIndent,
    marginBottom: SIZE.minIndent,
  },
});

export default AddNewPassScreen;
