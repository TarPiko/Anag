import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import normalizeFontSize from '../../utils/normalizeFontSize';
import TextSemiBold from '../../components/UI/TextSemiBold';
import TextRegular from '../../components/UI/TextRegular';
import PrimaryButton from '../../components/UI/PrimaryButton';

/**
 * Claim detail screen
 * @param {object} navigation
 * @param {object} route
 * @returns {JSX.Element}
 */
const ClaimDetailScreen = ({ navigation, route }) => {
  const onPayment = () => {
    navigation.navigate('PaymentTypeScreen', { claim: route.params.claim });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextSemiBold style={styles.title} numberOfLines={1}>
          Vehicle Claim
        </TextSemiBold>
        <TextRegular style={[styles.font16, styles.topIndent]}>
          Your claim payout has been approved.
        </TextRegular>
        <TextSemiBold style={[styles.font16, styles.topIndent, styles.fontLight]}>
          Claim payout amount
        </TextSemiBold>
        <TextSemiBold style={styles.price}>$8,000.00</TextSemiBold>
        <View style={styles.line} />
        <View style={styles.row}>
          <TextRegular style={[styles.font16, styles.fontLight]}>Deductible amount</TextRegular>
          <TextSemiBold style={styles.amount}>$400.00</TextSemiBold>
        </View>
        <TextRegular style={styles.topIndent}>
          Please verify the information above before proceeding.
        </TextRegular>
        <PrimaryButton title='Proceed to Payment' style={styles.button} onPress={onPayment} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
    paddingHorizontal: SIZE.mediumIndent,
  },
  title: {
    fontSize: normalizeFontSize(25),
    marginTop: SIZE.mediumIndent,
  },
  font16: {
    fontSize: normalizeFontSize(16),
  },
  topIndent: {
    marginTop: SIZE.mediumIndent,
  },
  fontLight: {
    color: COLORS.fontLight,
  },
  price: {
    fontSize: normalizeFontSize(18),
    marginTop: SIZE.minIndent / 2,
    color: COLORS.orange,
  },
  line: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SIZE.mediumIndent,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amount: {
    color: COLORS.green,
    fontSize: normalizeFontSize(25),
  },
  button: {
    marginVertical: SIZE.mediumIndent,
  },
});

export default ClaimDetailScreen;
