import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ArrowDownIcon, ArrowUpIcon, CarIcon } from '../../../assets/icons';
import TextSemiBold from '../../../components/UI/TextSemiBold';
import { COLORS, HIT_SLOP, SIZE } from '../../../constants/defaultStyles';
import TextLight from '../../../components/UI/TextLight';
import { useNavigation } from '@react-navigation/native';
import normalizeFontSize from '../../../utils/normalizeFontSize';
import TextRegular from '../../../components/UI/TextRegular';
import FileItem from './FileItem';
import StatusAwaiting from './StatusAwaiting';
import StatusApproved from './StatusApproved';
import StatusDenied from './StatusDenied';
import StatusPaid from './StatusPaid';
import StatusReview from './StatusReview';

const ClaimCard = ({ claim }) => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const handleSetOpen = () => {
    setIsOpen(!isOpen);
  };

  const toDetailClaim = () => {
    navigation.navigate('ClaimDetailScreen', { claim });
  };

  const claimStatus = {
    review: <StatusReview />,
    awaiting: <StatusAwaiting />,
    approved: <StatusApproved toDetailClaim={toDetailClaim} />,
    denied: <StatusDenied />,
    paid: <StatusPaid />,
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <View style={styles.icon}>
            <CarIcon />
          </View>
          <TextSemiBold style={styles.name}>Vehicle Claim</TextSemiBold>
        </View>
        <TouchableOpacity hitSlop={HIT_SLOP} activeOpacity={0.8} onPress={handleSetOpen}>
          {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </TouchableOpacity>
      </View>
      {isOpen && (
        <>
          <TextSemiBold style={styles.title}>Damage Details</TextSemiBold>
          <View style={styles.topIndent}>
            <TextLight style={styles.label}>Type of Damage</TextLight>
            <TextSemiBold style={styles.value}>{claim.damage}</TextSemiBold>
          </View>
          <View style={styles.topIndent}>
            <TextLight style={styles.label}>Damage Description</TextLight>
            <TextRegular style={styles.value}>{claim.damageInfo}</TextRegular>
          </View>
          <View style={[styles.line, styles.topIndent]} />
          {claim.damagePhotos.length ? (
            <>
              <TextSemiBold style={styles.title}>Photo of damage</TextSemiBold>
              {claim.damagePhotos.map((item, i) => (
                <FileItem key={`${item}_${i}`} name={item} />
              ))}
              <View style={[styles.line, styles.topIndent]} />
            </>
          ) : null}
          {claim.reportFiles.length ? (
            <>
              <TextSemiBold style={styles.title}>Police Report</TextSemiBold>
              {claim.reportFiles.map((item, i) => (
                <FileItem key={`${i}_${item}`} name={item} />
              ))}
              <View style={[styles.line, styles.topIndent]} />
            </>
          ) : null}
        </>
      )}
      <TextLight style={styles.status}>Status</TextLight>
      <View style={styles.statusBlock}>{claimStatus[claim.status]}</View>
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
  topIndent: {
    marginTop: SIZE.minIndent,
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
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
  marginLeftHalf: {
    marginLeft: SIZE.minIndent / 2,
  },
  statusBlock: {
    marginTop: SIZE.minIndent / 2,
    alignItems: 'center',
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  label: {
    fontSize: normalizeFontSize(12),
    color: COLORS.fontLight,
  },
  value: {
    fontSize: normalizeFontSize(18),
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
  name: {
    marginLeft: SIZE.minIndent,
    fontSize: normalizeFontSize(16),
  },
});

export default ClaimCard;
