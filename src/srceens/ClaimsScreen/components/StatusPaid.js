import React from 'react';
import { StyleSheet } from 'react-native';
import { COLORS, SIZE } from '../../../constants/defaultStyles';
import normalizeFontSize from '../../../utils/normalizeFontSize';
import { TicketIcon } from '../../../assets/icons';
import TextSemiBold from '../../../components/UI/TextSemiBold';

const StatusPaid = () => {
  return (
    <>
      <TicketIcon color={COLORS.green} />
      <TextSemiBold style={styles.pending}>Claim Payment is ready</TextSemiBold>
    </>
  );
};

const styles = StyleSheet.create({
  pending: {
    fontSize: normalizeFontSize(18),
    marginLeft: SIZE.minIndent / 2,
  },
});

export default StatusPaid;
