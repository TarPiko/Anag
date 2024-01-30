import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { LetterIcon, QuoteIcon } from '../../../assets/icons';
import TextSemiBold from '../../../components/UI/TextSemiBold';
import { HIT_SLOP, SIZE } from '../../../constants/defaultStyles';
import normalizeFontSize from '../../../utils/normalizeFontSize';

const StatusDenied = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.center]}>
        <QuoteIcon />
        <TextSemiBold style={styles.pending}>Denied</TextSemiBold>
      </View>
      <TouchableOpacity style={[styles.row, styles.center]} activeOpacity={0.8} hitSlop={HIT_SLOP}>
        <LetterIcon />
        <TextSemiBold style={styles.marginLeftHalf}>Message an Agent</TextSemiBold>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
  },
  flex1: {
    flex: 1,
  },
  marginLeftHalf: {
    marginLeft: SIZE.minIndent / 2,
  },
  pending: {
    fontSize: normalizeFontSize(18),
    marginLeft: SIZE.minIndent / 2,
  },
});

export default StatusDenied;
