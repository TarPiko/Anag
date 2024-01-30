import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowLeftIcon } from '../../assets/icons';
import { HIT_SLOP, SIZE } from '../../constants/defaultStyles';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      style={styles.container}
      hitSlop={HIT_SLOP}
      activeOpacity={0.8}
      onPress={onBack}
    >
      <ArrowLeftIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: SIZE.minIndent,
  },
});

export default BackButton;
