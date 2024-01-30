import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { CloseIcon, PhotoIcon } from '../../../assets/icons';
import TextRegular from '../../../components/UI/TextRegular';
import { SIZE } from '../../../constants/defaultStyles';

const FileItem = ({ onPress, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <PhotoIcon />
        <TextRegular style={styles.text}>{name}</TextRegular>
      </View>
      <TouchableOpacity onPress={onPress}>
        <CloseIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZE.minIndent,
  },
  text: {
    marginLeft: SIZE.minIndent / 2,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default FileItem;
