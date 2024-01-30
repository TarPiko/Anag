import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { COLORS, SIZE } from '../../../constants/defaultStyles';
import TextSemiBold from '../../../components/UI/TextSemiBold';
import TextRegular from '../../../components/UI/TextRegular';
import normalizeFontSize from '../../../utils/normalizeFontSize';

const ScanIDCard = () => {
  return (
    <Pressable style={styles.container}>
      <TextSemiBold style={styles.title}>Scan your ID card easily</TextSemiBold>
      <TextRegular style={styles.description}>All policy info in one tap</TextRegular>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.greenMedium,
    borderWidth: 1,
    borderRadius: 12,
    padding: SIZE.minIndent,
    marginVertical: SIZE.minIndent,
  },
  title: {
    fontSize: normalizeFontSize(16),
  },
  description: {
    fontSize: normalizeFontSize(12),
    marginTop: SIZE.minIndent / 2,
  },
});

export default ScanIDCard;
