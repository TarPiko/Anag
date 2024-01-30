import React, { useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import Barcode from '@kichiyaki/react-native-barcode-generator';
import TextRegular from '../../components/UI/TextRegular';
import { COLORS } from '../../constants/defaultStyles';
import { LogoIcon } from '../../assets/icons';
import TextSemiBold from '../../components/UI/TextSemiBold';
import WithBorderButton from '../../components/UI/WithBorderButton';
import BarCodeModal from './components/BarCodeModal';
import normalizeFontSize from '../../utils/normalizeFontSize';

const { width, height } = Dimensions.get('window');

/**
 * ID card screen
 * @returns {JSX.Element}
 */
const IDCardScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  const openBarCode = () => {
    setIsVisible(true);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.flex1}>
            <View style={styles.rowCenter}>
              <LogoIcon />
              <TextSemiBold style={styles.title}>Nagico</TextSemiBold>
            </View>
            <View style={[styles.rowCenter, styles.marginTop]}>
              <View style={styles.flex1}>
                <TextRegular style={styles.label}>Policy No.</TextRegular>
                <TextSemiBold>5679871235</TextSemiBold>
              </View>
              <View style={styles.flex1}>
                <TextRegular style={styles.label}>Expiration Date</TextRegular>
                <TextSemiBold>2024/11/13</TextSemiBold>
              </View>
            </View>
            <View style={styles.marginTop}>
              <TextRegular style={styles.label}>Insured</TextRegular>
              <TextRegular>John M. Smith</TextRegular>
              <TextRegular>107 Reavley Rd Sale Creek, Tennessee(TN), 37373</TextRegular>
              <TextRegular>(423) 332-7946</TextRegular>
            </View>
          </View>
          <View style={styles.flex1}>
            <TextRegular style={styles.label}>Name & address of Issuer:</TextRegular>
            <TextRegular>NAGICO Insurances</TextRegular>
            <TextRegular>26 C.A. Cannegieter Street Philipsburg, St. Maarten</TextRegular>
            <TextRegular>(+1-721) 542-2739</TextRegular>
          </View>
        </View>
        <View style={[styles.row, styles.marginTop]}>
          <View style={styles.flex1}>
            <TextRegular style={styles.label}>
              Applicable with respect to the following Motor Vehicle:
            </TextRegular>
            <View style={[styles.rowCenter, { marginTop: 8 }]}>
              <View style={styles.flex1}>
                <TextRegular style={styles.label}>Year</TextRegular>
                <TextRegular>1980</TextRegular>
              </View>
              <View style={styles.flex1}>
                <TextRegular style={styles.label}>Make</TextRegular>
                <TextRegular>Toyota</TextRegular>
              </View>
              <View style={styles.flex1}>
                <TextRegular style={styles.label}>Model</TextRegular>
                <TextRegular>Highlander</TextRegular>
              </View>
            </View>
          </View>
          <View style={styles.flex1}>
            <TextRegular style={styles.label}>Vehicle Identification Number (VIN)</TextRegular>
            <TextRegular>345JHHH823H87F5H7</TextRegular>
            <View>
              <Barcode value='345JHwewqw' height={70} maxWidth={250} />
              <WithBorderButton title='Tap to Scan' style={styles.button} onPress={openBarCode} />
            </View>
          </View>
        </View>
      </View>
      <BarCodeModal isVisible={isVisible} setIsVisible={setIsVisible} value='4r3efwefwefwefwe4' />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    transform: [{ rotate: '-90deg' }],
    backgroundColor: COLORS.light,
    marginTop: normalizeFontSize(height) * 0.15,
    paddingHorizontal: normalizeFontSize(height) * 0.12,
    width: height,
    height: width,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  marginTop: {
    marginTop: 16,
  },
  title: {
    fontSize: 16,
    color: COLORS.green,
    textTransform: 'uppercase',
    marginLeft: 5,
  },
  label: {
    fontSize: 10,
    color: COLORS.fontLight,
  },
  button: {
    position: 'absolute',
    top: 7,
    left: 70,
    width: '50%',
  },
});

export default IDCardScreen;
