import React from 'react';
import { StyleSheet, View } from 'react-native';
import { EditIcon, LetterIcon, LoadingIcon } from '../../../assets/icons';
import TextSemiBold from '../../../components/UI/TextSemiBold';
import normalizeFontSize from '../../../utils/normalizeFontSize';
import { SIZE } from '../../../constants/defaultStyles';

const StatusAwaiting = () => {
  return (
    <View>
      <View style={styles.row}>
        <LoadingIcon />
        <TextSemiBold style={styles.pending}>Awaiting your input</TextSemiBold>
      </View>
      <View style={[styles.row, styles.topIndent]}>
        <EditIcon />
        <TextSemiBold style={styles.leftIndent}>View Requested Information</TextSemiBold>
      </View>
      <View style={[styles.row, styles.topIndent]}>
        <LetterIcon />
        <TextSemiBold style={styles.leftIndent}>Message an Agent</TextSemiBold>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pending: {
    fontSize: normalizeFontSize(18),
    marginLeft: SIZE.minIndent / 2,
  },
  leftIndent: {
    marginLeft: SIZE.minIndent / 2,
  },
  topIndent: {
    marginTop: SIZE.minIndent,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default StatusAwaiting;
