import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import Barcode from '@kichiyaki/react-native-barcode-generator';
import { COLORS, HIT_SLOP, SIZE } from '../../../constants/defaultStyles';
import { CloseIcon } from '../../../assets/icons';
import normalizeFontSize from '../../../utils/normalizeFontSize';

const { height } = Dimensions.get('window');

const BarCodeModal = ({ setIsVisible, isVisible, value }) => {
  const closeModal = () => {
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
        <View style={styles.barCodeContainer}>
          <Barcode value={value} maxWidth={400} height={160} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    marginTop: height * 0.1,
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
  barCodeContainer: {
    transform: [{ rotate: '-90deg' }],
    marginTop: normalizeFontSize(height) * 0.25,
    paddingHorizontal: 30,
    paddingVertical: 30,
    alignSelf: 'center',
    justifyContent: 'center',

    borderRadius: 12,
    borderWidth: 5,
    borderColor: COLORS.greenMedium,
  },
});

export default BarCodeModal;
