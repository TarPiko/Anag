import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import TextSemiBold from '../../components/UI/TextSemiBold';
import { COLORS, SIZE } from '../../constants/defaultStyles';
import normalizeFontSize from '../../utils/normalizeFontSize';
import PolicyType from './components/PolicyType';
import { CarIcon, FirstAidIcon, HouseIcon, PersonIcon } from '../../assets/icons';

/**
 * Policy types screen
 * @param navigation
 * @returns {JSX.Element}
 */
const PolicyTypesScreen = ({ navigation }) => {
  const handleOnPress = type => {
    navigation.navigate('DriverInfoScreen', { quote: { type } });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextSemiBold style={styles.title}>Select Policy Type</TextSemiBold>
        <View style={styles.subTitle}>
          <PolicyType
            title='Vehicle'
            isActive={true}
            onPress={() => handleOnPress('vehicle')}
            icon={<CarIcon width={22} height={17} color={COLORS.fontLight} />}
          />
          <PolicyType
            title='Home Owners'
            isActive={false}
            onPress={handleOnPress}
            icon={<HouseIcon />}
          />
          <PolicyType
            title='Life Insurance'
            isActive={false}
            onPress={handleOnPress}
            icon={<PersonIcon />}
          />
          <PolicyType
            title='Medical Insurance'
            isActive={false}
            onPress={handleOnPress}
            icon={<FirstAidIcon />}
          />
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
});

export default PolicyTypesScreen;
