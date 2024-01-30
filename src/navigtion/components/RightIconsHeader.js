import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MailIcon, MessageIcon, SettingsIcon } from '../../assets/icons';
import { COLORS, HIT_SLOP, SIZE } from '../../constants/defaultStyles';

const RightIconsHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.8} hitSlop={HIT_SLOP}>
          <MailIcon color={COLORS.fontLight} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.8} hitSlop={HIT_SLOP}>
          <MessageIcon color={COLORS.fontLight} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.8} hitSlop={HIT_SLOP}>
          <SettingsIcon color={COLORS.fontLight} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.light,
  },
  icons: {
    flexDirection: 'row',
  },
  iconButton: {
    backgroundColor: COLORS.greenLight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginLeft: SIZE.minIndent,
    width: 30,
    height: 30,
  },
});

export default RightIconsHeader;
