import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { COLORS, SIZE } from '../../../constants/defaultStyles';
import TextSemiBold from '../../../components/UI/TextSemiBold';
import TextRegular from '../../../components/UI/TextRegular';
import normalizeFontSize from '../../../utils/normalizeFontSize';
import { useNavigation } from '@react-navigation/native';

const GetQuote = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('QuotesStack', { screen: 'QuotesScreen' });
  };

  return (
    <Pressable style={styles.container} onPress={handleNavigate}>
      <TextSemiBold style={styles.title}>Get a new quote in 3 steps</TextSemiBold>
      <TextRegular style={styles.description}>Receive a ticket from our agents </TextRegular>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.greenMedium,
    borderRadius: 12,
    padding: SIZE.minIndent,
    marginTop: SIZE.minIndent,
  },
  title: {
    fontSize: normalizeFontSize(16),
    color: COLORS.green,
  },
  description: {
    fontSize: normalizeFontSize(12),
    marginTop: SIZE.minIndent / 2,
  },
});

export default GetQuote;
