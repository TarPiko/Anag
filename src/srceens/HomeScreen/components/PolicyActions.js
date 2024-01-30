import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { CancelIcon, ClipboardSmallIcon, PauseIcon, RenewIcon } from '../../../assets/icons';
import TextRegular from '../../../components/UI/TextRegular';
import { SIZE } from '../../../constants/defaultStyles';

const PolicyActions = () => {
  return (
    <View style={styles.content}>
      <View style={styles.infoBlock}>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={[styles.row, styles.center]}>
            <ClipboardSmallIcon />
            <TextRegular style={styles.marginLeft}>Make a claim</TextRegular>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.8}>
          <View style={[styles.row, styles.center]}>
            <CancelIcon />
            <TextRegular style={styles.marginLeft}>Cancel</TextRegular>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.infoBlock}>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={[styles.row, styles.center]}>
            <RenewIcon />
            <TextRegular style={styles.marginLeft}>Renew</TextRegular>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.8}>
          <View style={[styles.row, styles.center]}>
            <PauseIcon />
            <TextRegular style={styles.marginLeft}>Suspend</TextRegular>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    marginTop: SIZE.minIndent,
  },
  content: {
    flexDirection: 'row',
    marginTop: SIZE.minIndent,
  },
  infoBlock: {
    width: '50%',
  },
  center: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  marginLeft: {
    marginLeft: SIZE.minIndent / 2,
  },
});

export default PolicyActions;
