import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { AcceptIcon, TicketIcon } from '../../../assets/icons';
import TextSemiBold from '../../../components/UI/TextSemiBold';
import { HIT_SLOP, SIZE } from '../../../constants/defaultStyles';
import normalizeFontSize from '../../../utils/normalizeFontSize';

const StatusApproved = ({ toDetailClaim }) => {
  return (
    <>
      <View style={[styles.row, styles.center, styles.flex1]}>
        <AcceptIcon />
        <TextSemiBold style={styles.pending}>Approved</TextSemiBold>
      </View>
      <TouchableOpacity
        style={[styles.row, styles.center, styles.flex1]}
        activeOpacity={0.8}
        onPress={toDetailClaim}
        hitSlop={HIT_SLOP}
      >
        <TicketIcon />
        <TextSemiBold style={styles.marginLeftHalf}>View claim</TextSemiBold>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
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

export default StatusApproved;
