import React from 'react';
import { StyleSheet } from 'react-native';
import { SearchIcon } from '../../../assets/icons';
import TextSemiBold from '../../../components/UI/TextSemiBold';
import normalizeFontSize from '../../../utils/normalizeFontSize';
import { SIZE } from '../../../constants/defaultStyles';

const StatusReview = () => {
  return (
    <>
      <SearchIcon />
      <TextSemiBold style={styles.pending}>Under review</TextSemiBold>
    </>
  );
};

const styles = StyleSheet.create({
  pending: {
    fontSize: normalizeFontSize(18),
    marginLeft: SIZE.minIndent / 2,
  },
});

export default StatusReview;
