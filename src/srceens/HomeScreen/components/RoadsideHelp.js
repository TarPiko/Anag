import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS, SIZE } from '../../../constants/defaultStyles';
import TextSemiBold from '../../../components/UI/TextSemiBold';
import TextMedium from '../../../components/UI/TextMedium';
import normalizeFontSize from '../../../utils/normalizeFontSize';
import TextRegular from '../../../components/UI/TextRegular';

const RoadsideHelp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextSemiBold style={styles.title}>Request Roadside Help</TextSemiBold>
        <TextMedium style={styles.comingSoon}>coming soon</TextMedium>
      </View>
      <TextRegular style={styles.text}>Get help on the road with Roadside Assistent</TextRegular>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: SIZE.minIndent,
    borderWidth: 1,
    borderColor: COLORS.orangeLight,
    marginTop: SIZE.minIndent,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: normalizeFontSize(16),
    color: COLORS.fontLight,
  },
  comingSoon: {
    fontSize: normalizeFontSize(10),
    color: COLORS.orange,
    textTransform: 'uppercase',
  },
  text: {
    fontSize: normalizeFontSize(12),
    marginTop: SIZE.minIndent / 2,
  },
});

export default RoadsideHelp;
