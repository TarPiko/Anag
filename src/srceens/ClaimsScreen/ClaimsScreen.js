import React, { useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react';
import TextRegular from '../../components/UI/TextRegular';
import TextSemiBold from '../../components/UI/TextSemiBold';
import AddButton from '../../components/UI/AddButton';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import normalizeFontSize from '../../utils/normalizeFontSize';
import { useRootModel } from '../../models/RootStore';
import ClaimCard from './components/ClaimCard';

/**
 * Claims screen
 * @param navigation
 * @returns {JSX.Element}
 */
const ClaimsScreen = ({ navigation }) => {
  const {
    user: { claims },
  } = useRootModel();

  const [refreshing, setRefreshing] = useState(false);

  const makeClaim = () => {
    navigation.navigate('MakeClaimScreen');
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      if (claims.length) {
        claims.forEach((claim, i) => {
          if (claim.status === 'review') {
            claim.setStatus('awaiting');
          } else if (claim.status === 'awaiting') {
            i % 2 ? claim.setStatus('approved') : claim.setStatus('denied');
          }
        });
      }
      setRefreshing(false);
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl tintColor={COLORS.dark} refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <TextSemiBold style={styles.title}>My Claims</TextSemiBold>
        <View style={styles.subTitle}>
          {claims.length ? (
            claims.map((item, i) => <ClaimCard key={`${item.vehiclePolicy}_${i}`} claim={item} />)
          ) : (
            <TextRegular style={styles.subTitle}>You haven’t made any claims yet.</TextRegular>
          )}
          <AddButton title='Make a Claim' style={styles.button} onPress={makeClaim} />
        </View>
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
  subTitle: {
    marginTop: SIZE.minIndent,
    color: COLORS.fontLight,
  },
  button: {
    marginVertical: SIZE.mediumIndent,
  },
});

export default observer(ClaimsScreen);
