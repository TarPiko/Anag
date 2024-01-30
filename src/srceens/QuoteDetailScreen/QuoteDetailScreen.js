import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import TextSemiBold from '../../components/UI/TextSemiBold';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import normalizeFontSize from '../../utils/normalizeFontSize';
import TextLight from '../../components/UI/TextLight';
import TextRegular from '../../components/UI/TextRegular';
import PrimaryButton from '../../components/UI/PrimaryButton';

/**
 * Quote detail screen
 * @param navigation
 * @param route
 * @returns {JSX.Element}
 */
const QuoteDetailScreen = ({ navigation, route }) => {
  const { quote } = route.params;

  const onProceed = () => {
    quote.setIsPolicy(true);
    navigation.reset({
      index: 0,
      routes: [{ name: 'PolicyCreatedScreen' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextSemiBold style={styles.title} numberOfLines={1}>
          Vehicle Insurance Quote
        </TextSemiBold>
        <TextSemiBold style={styles.subTitle}>Policy</TextSemiBold>
        <View style={[styles.row, styles.verticalIndent]}>
          <View style={styles.flex1}>
            <TextLight style={styles.label}>Price</TextLight>
            <TextSemiBold style={[styles.value, styles.colorOrange]}>{quote.price}</TextSemiBold>
          </View>
          <View style={styles.flex1}>
            <TextLight style={styles.label}>Option</TextLight>
            <TextSemiBold style={styles.value}>{quote.policyOption}</TextSemiBold>
          </View>
        </View>
        <View style={styles.line} />
        <TextSemiBold style={styles.subTitle}>Driver</TextSemiBold>
        <View style={[styles.row, styles.verticalIndent]}>
          <View style={styles.flex1}>
            <TextLight style={styles.label}>Year of Birth</TextLight>
            <TextRegular style={styles.value}>{quote.driverYear}</TextRegular>
          </View>
          <View style={styles.flex1}>
            <TextLight style={styles.label}>Gender</TextLight>
            <TextRegular style={styles.value}>{quote.gender}</TextRegular>
          </View>
        </View>
        <View style={styles.line} />
        <TextSemiBold style={styles.subTitle}>Vehicle</TextSemiBold>
        <View style={[styles.row, styles.verticalIndent]}>
          <View style={styles.flex1}>
            <TextLight style={styles.label}>Year</TextLight>
            <TextRegular style={styles.value}>{quote.vehicleYear}</TextRegular>
          </View>
          <View style={styles.flex1}>
            <TextLight style={styles.label}>Make</TextLight>
            <TextRegular style={styles.value}>{quote.make}</TextRegular>
          </View>
          <View style={styles.flex1}>
            <TextLight style={styles.label}>Model</TextLight>
            <TextRegular style={styles.value}>{quote.model}</TextRegular>
          </View>
        </View>
        <View style={[styles.row, styles.verticalIndent]}>
          <View style={styles.flex1}>
            <TextLight style={styles.label}>Trim</TextLight>
            <TextRegular style={styles.value}>{quote.trim}</TextRegular>
          </View>
          <View style={styles.flex1}>
            <TextLight style={styles.label}>Mileage</TextLight>
            <TextRegular style={styles.value}>{quote.annualMileage}</TextRegular>
          </View>
        </View>
        <View style={[styles.flex1, styles.verticalIndent]}>
          <TextLight style={styles.label}>Vehicle Type</TextLight>
          <TextRegular style={styles.value}>{quote.vehicleType}</TextRegular>
        </View>
        <View style={[styles.flex1, styles.verticalIndent]}>
          <TextLight style={styles.label}>Vehicle Identification Number (VIN)</TextLight>
          <TextRegular style={styles.value}>{quote.vin.toUpperCase()}</TextRegular>
        </View>
        <View style={[styles.flex1, styles.verticalIndent]}>
          <TextLight style={styles.label}>Purpose of this vehicle</TextLight>
          <TextRegular style={styles.value}>{quote.purposeVehicle}</TextRegular>
        </View>
        <View style={styles.line} />
        <View style={styles.priceBlock}>
          <TextRegular style={[styles.value, styles.colorLightGrey]}>Total amount</TextRegular>
          <TextSemiBold style={styles.price}>{quote.price}</TextSemiBold>
        </View>
        <TextRegular>
          Please verify the quote information above before converting to policy
        </TextRegular>
        <PrimaryButton style={styles.button} title='Proceed to Payment' onPress={onProceed} />
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
  verticalIndent: {
    marginVertical: SIZE.minIndent,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    marginVertical: SIZE.mediumIndent,
  },
  subTitle: {
    fontSize: normalizeFontSize(16),
    color: COLORS.fontLight,
    marginTop: SIZE.minIndent,
  },
  line: {
    height: 1,
    backgroundColor: COLORS.border,
  },
  label: {
    fontSize: normalizeFontSize(12),
    color: COLORS.fontLight,
  },
  value: {
    fontSize: normalizeFontSize(16),
  },
  flex1: {
    flex: 1,
  },
  colorOrange: {
    color: COLORS.orange,
  },
  colorLightGrey: {
    color: COLORS.fontLight,
  },
  center: {
    alignItems: 'center',
  },
  price: {
    color: COLORS.green,
    fontSize: normalizeFontSize(25),
  },
  priceBlock: {
    flexDirection: 'row',
    marginVertical: SIZE.minIndent,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default QuoteDetailScreen;
