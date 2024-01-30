import React, { useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react';
import TextRegular from '../../components/UI/TextRegular';
import TextSemiBold from '../../components/UI/TextSemiBold';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import normalizeFontSize from '../../utils/normalizeFontSize';
import { useRootModel } from '../../models/RootStore';
import AddButton from '../../components/UI/AddButton';
import QuoteCard from './components/QuoteCard';

/**
 * Quotes screen
 * @param {object} navigation
 * @returns {JSX.Element}
 */
const QuotesScreen = ({ navigation }) => {
  const {
    user: { quotes },
  } = useRootModel();

  const [refreshing, setRefreshing] = useState(false);
  const quotesList = quotes.filter(item => item.isPolicy === false);

  const selectQuote = () => {
    navigation.navigate('PolicyTypesScreen');
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      if (quotesList.length) {
        quotesList.forEach(quote => quote.setIsFinished(true));
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
        <TextSemiBold style={styles.title}>My Quotes</TextSemiBold>
        <View style={styles.subTitle}>
          {quotesList.length ? (
            quotesList.map(item => <QuoteCard key={item.vin} quote={item} />)
          ) : (
            <TextRegular style={styles.subTitle}>You haven’t requested any quotes yet.</TextRegular>
          )}
          <AddButton title='Request a quote' style={styles.button} onPress={selectQuote} />
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
    marginTop: SIZE.mediumIndent,
  },
});

export default observer(QuotesScreen);
