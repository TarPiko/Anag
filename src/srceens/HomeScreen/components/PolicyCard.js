import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ArrowDownIcon, ArrowUpIcon, CarIcon } from '../../../assets/icons';
import { COLORS, HIT_SLOP, SIZE } from '../../../constants/defaultStyles';
import TextSemiBold from '../../../components/UI/TextSemiBold';
import normalizeFontSize from '../../../utils/normalizeFontSize';
import TextLight from '../../../components/UI/TextLight';
import PolicyActions from './PolicyActions';

const PolicyCard = ({ policy }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSetOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <View style={styles.icon}>
            <CarIcon />
          </View>
          <TextSemiBold style={styles.name}>
            {`${policy.vehicleYear} ${policy.make} ${policy.model}`}
          </TextSemiBold>
        </View>
        <TouchableOpacity hitSlop={HIT_SLOP} activeOpacity={0.8} onPress={handleSetOpen}>
          {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.infoBlock}>
          <TextLight style={styles.textLight}>Policy No.</TextLight>
          <TextSemiBold style={styles.textBold}>{policy.policyNumber}</TextSemiBold>
        </View>
        <View style={styles.infoBlock}>
          <TextLight style={styles.textLight}>Expiration Date</TextLight>
          <TextSemiBold style={styles.textBold}>2024/11/13</TextSemiBold>
        </View>
      </View>
      {isOpen && <PolicyActions />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: SIZE.minIndent,
    marginTop: SIZE.minIndent,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 24,
    height: 24,
    borderColor: COLORS.green,
    borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  name: {
    marginLeft: SIZE.minIndent,
    fontSize: normalizeFontSize(16),
  },
  content: {
    flexDirection: 'row',
    marginTop: SIZE.minIndent,
  },
  textLight: {
    color: COLORS.fontLight,
  },
  textBold: {
    fontSize: normalizeFontSize(18),
  },
  infoBlock: {
    width: '50%',
  },
});
export default PolicyCard;
