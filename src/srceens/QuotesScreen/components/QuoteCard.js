import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  AcceptIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  CarIcon,
  LoadingIcon,
  TicketIcon,
} from '../../../assets/icons';
import TextSemiBold from '../../../components/UI/TextSemiBold';
import { COLORS, HIT_SLOP, SIZE } from '../../../constants/defaultStyles';
import normalizeFontSize from '../../../utils/normalizeFontSize';
import TextLight from '../../../components/UI/TextLight';
import { useNavigation } from '@react-navigation/native';

const QuoteCard = ({ quote }) => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const handleSetOpen = () => {
    setIsOpen(!isOpen);
  };

  const toDetailQuote = () => {
    navigation.navigate('QuoteDetailScreen', { quote });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <View style={styles.icon}>
            <CarIcon />
          </View>
          <TextSemiBold style={styles.name}>Vehicle Insurance Quote</TextSemiBold>
        </View>
        <TouchableOpacity hitSlop={HIT_SLOP} activeOpacity={0.8} onPress={handleSetOpen}>
          {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </TouchableOpacity>
      </View>
      {isOpen && (
        <>
          <TextSemiBold style={styles.title}>Driver</TextSemiBold>
          <View style={[styles.row, styles.verticalIndent]}>
            <View style={styles.flex1}>
              <TextLight style={styles.label}>Year of Birth</TextLight>
              <TextSemiBold style={styles.value}>{quote.driverYear}</TextSemiBold>
            </View>
            <View style={styles.flex1}>
              <TextLight style={styles.label}>Gender</TextLight>
              <TextSemiBold style={styles.value}>{quote.gender}</TextSemiBold>
            </View>
          </View>
          <View style={styles.line} />
          <TextSemiBold style={styles.title}>Vehicle</TextSemiBold>
          <View style={[styles.row, styles.verticalIndent]}>
            <View style={styles.flex1}>
              <TextLight style={styles.label}>Year</TextLight>
              <TextSemiBold style={styles.value} numberOfLines={1}>
                {quote.vehicleYear}
              </TextSemiBold>
            </View>
            <View style={styles.flex1}>
              <TextLight style={styles.label}>Make</TextLight>
              <TextSemiBold style={styles.value} numberOfLines={1}>
                {quote.make}
              </TextSemiBold>
            </View>
            <View style={styles.flex1}>
              <TextLight style={styles.label}>Model</TextLight>
              <TextSemiBold style={styles.value} numberOfLines={1}>
                {quote.model}
              </TextSemiBold>
            </View>
          </View>
          <View style={styles.line} />
        </>
      )}
      <TextLight style={styles.status}>Status</TextLight>
      <View style={styles.statusBlock}>
        {quote.isFinished ? (
          <>
            <View style={[styles.row, styles.center, styles.flex1]}>
              <AcceptIcon />
              <TextSemiBold style={styles.pending}>Finished</TextSemiBold>
            </View>
            <TouchableOpacity
              style={[styles.row, styles.center, styles.flex1]}
              activeOpacity={0.8}
              onPress={toDetailQuote}
              hitSlop={HIT_SLOP}
            >
              <TicketIcon />
              <TextSemiBold style={styles.marginLeftHalf}>View quote</TextSemiBold>
            </TouchableOpacity>
          </>
        ) : (
          <View style={[styles.row, styles.center]}>
            <LoadingIcon />
            <TextSemiBold style={styles.pending}>Pending</TextSemiBold>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: SIZE.minIndent,
    marginTop: SIZE.mediumIndent,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 24,
    height: 24,
    borderColor: COLORS.green,
    borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
  },
  verticalIndent: {
    marginVertical: SIZE.minIndent,
  },
  name: {
    marginLeft: SIZE.minIndent,
    fontSize: normalizeFontSize(16),
  },
  status: {
    fontSize: normalizeFontSize(12),
    color: COLORS.fontLight,
    marginTop: SIZE.minIndent,
  },
  pending: {
    fontSize: normalizeFontSize(18),
    marginLeft: SIZE.minIndent / 2,
  },
  title: {
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
    fontSize: normalizeFontSize(18),
  },
  flex1: {
    flex: 1,
  },
  marginLeftHalf: {
    marginLeft: SIZE.minIndent / 2,
  },
  statusBlock: {
    marginTop: SIZE.minIndent / 2,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default QuoteCard;
