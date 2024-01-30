import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS, SIZE } from '../../../constants/defaultStyles';
import TextSemiBold from '../../../components/UI/TextSemiBold';
import normalizeFontSize from '../../../utils/normalizeFontSize';
import TextMedium from '../../../components/UI/TextMedium';

const PolicyType = ({ title, isActive, onPress, icon }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      disabled={!isActive}
      onPress={onPress}
    >
      <View style={styles.wrapper}>
        <View
          style={[styles.icon, { backgroundColor: isActive ? COLORS.greenMedium : COLORS.border }]}
        >
          {icon}
        </View>
        <TextSemiBold style={[styles.title, !isActive && { color: COLORS.fontLight }]}>
          {title}
        </TextSemiBold>
      </View>

      {!isActive && <TextMedium style={styles.comingSoon}>coming soon</TextMedium>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SIZE.minIndent,
    borderRadius: 12,
    borderColor: COLORS.greenMedium,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SIZE.minIndent,
  },
  icon: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  title: {
    marginLeft: SIZE.minIndent / 2,
    fontSize: normalizeFontSize(16),
  },
  comingSoon: {
    textTransform: 'uppercase',
    fontSize: normalizeFontSize(10),
    color: COLORS.green,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PolicyType;
