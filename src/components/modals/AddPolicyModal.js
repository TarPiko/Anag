import React, { useMemo, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import TextRegular from '../UI/TextRegular';
import { COLORS, HIT_SLOP, SIZE } from '../../constants/defaultStyles';
import { CloseIcon } from '../../assets/icons';
import TextSemiBold from '../UI/TextSemiBold';
import normalizeFontSize from '../../utils/normalizeFontSize';
import PrimaryInput from '../UI/PrimaryInput';
import TextLight from '../UI/TextLight';
import PrimaryButton from '../UI/PrimaryButton';
import { useRootModel } from '../../models/RootStore';
import { defaultPolicy } from '../../constants/mockupData';

const AddPolicyModal = ({ setIsVisible, isVisible }) => {
  const {
    user: { addNewQuote },
  } = useRootModel();
  const [policyNumber, setPolicy] = useState('');

  const disabled = useMemo(() => {
    return policyNumber === '';
  }, [policyNumber]);

  const closeModal = () => {
    setIsVisible(false);
    setPolicy('');
  };

  const savePolicy = () => {
    addNewQuote({ ...defaultPolicy, policyNumber, createdDate: new Date().getTime() });
    setPolicy('');
    setIsVisible(false);
  };

  return (
    <Modal
      isVisible={isVisible}
      onModalHide={closeModal}
      animationIn='slideInUp'
      animationOut='slideOutDown'
      animationOutTiming={300}
      animationInTiming={300}
      useNativeDriver
      style={styles.modal}
      onBackdropPress={closeModal}
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.close} hitSlop={HIT_SLOP} onPress={closeModal}>
          <CloseIcon />
        </TouchableOpacity>
        <TextSemiBold style={styles.title}>Add new policy</TextSemiBold>
        <TextRegular>Please fill in the policy number</TextRegular>
        <PrimaryInput
          style={styles.input}
          onChangeText={setPolicy}
          value={policyNumber}
          keyboardType='numeric'
          maxLength={12}
          placeholder='0000000000'
        />
        <TextLight style={styles.find}>Where do I find my policy number?</TextLight>
        <PrimaryButton
          title='Submit'
          style={styles.button}
          onPress={savePolicy}
          disabled={disabled}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    marginTop: 100,
  },
  modalContainer: {
    backgroundColor: COLORS.light,
    flex: 1,
    padding: SIZE.mediumIndent,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  close: {
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: normalizeFontSize(25),
    marginVertical: SIZE.mediumIndent,
  },
  input: {
    marginTop: SIZE.minIndent,
  },
  find: {
    textDecorationLine: 'underline',
    color: COLORS.fontLight,
    fontSize: normalizeFontSize(12),
    marginTop: SIZE.minIndent / 2,
  },
  button: {
    marginTop: SIZE.largeIndent,
  },
});

export default AddPolicyModal;
