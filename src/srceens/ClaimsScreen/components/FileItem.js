import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { FileIcon, PhotoIcon } from '../../../assets/icons';
import TextRegular from '../../../components/UI/TextRegular';
import { SIZE } from '../../../constants/defaultStyles';
import TextLight from '../../../components/UI/TextLight';

const FileItem = ({ name }) => {
  const format = name.split('.')[1];
  const icon = format === 'pdf' ? <FileIcon /> : <PhotoIcon />;

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {icon}
        <TextRegular style={styles.text}>{name}</TextRegular>
      </View>
      <TouchableOpacity>
        <TextLight style={styles.preview}>Preview</TextLight>
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
  preview: {
    textDecorationLine: 'underline',
  },
});

export default FileItem;
